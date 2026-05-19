from flask import Flask, jsonify, request, session, send_from_directory
import sqlite3
import os
import hashlib
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / 'ogani.db'

app = Flask(__name__, static_folder='.', static_url_path='')
app.secret_key = 'ogani-secret-key-change-me'



def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode('utf-8')).hexdigest()


def init_db():
    if DB_PATH.exists():
        return
    conn = get_db()
    with conn:
        conn.execute('''
            CREATE TABLE users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL
            )
        ''')
        conn.execute('''
            CREATE TABLE products (
                id TEXT PRIMARY KEY,
                name TEXT NOT NULL,
                price REAL NOT NULL,
                image TEXT,
                category TEXT
            )
        ''')
        conn.execute('''
            CREATE TABLE carts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                product_id TEXT NOT NULL,
                quantity INTEGER NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id),
                FOREIGN KEY(product_id) REFERENCES products(id)
            )
        ''')
        conn.execute('''
            CREATE TABLE favorites (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id INTEGER NOT NULL,
                product_id TEXT NOT NULL,
                FOREIGN KEY(user_id) REFERENCES users(id),
                FOREIGN KEY(product_id) REFERENCES products(id)
            )
        ''')
    conn.close()


# Initialize the database when the module is imported or the server starts.
init_db()

@app.route('/api/user', methods=['GET'])
def get_current_user():
    username = session.get('username')
    if not username:
        return jsonify({'user': None})
    return jsonify({'user': username})


@app.route('/api/auth/register', methods=['POST'])
def register():
    print("Register request received")
    data = request.get_json() or {}
    print(f"Data: {data}")
    username = (data.get('username') or '').strip().lower()
    password = data.get('password', '')

    if not username or not password:
        print("Missing fields")
        return jsonify({'success': False, 'message': 'Completa todos los campos.'}), 400

    password_hash = hash_password(password)
    conn = get_db()
    try:
        with conn:
            cursor = conn.execute('INSERT INTO users (username, password_hash) VALUES (?, ?)', (username, password_hash))
            user_id = cursor.lastrowid
        session['username'] = username
        print(f"User {username} registered successfully")
        return jsonify({'success': True, 'user': username, 'userId': user_id})
    except sqlite3.IntegrityError:
        print(f"User {username} already exists")
        return jsonify({'success': False, 'message': 'El usuario ya existe.'}), 409
    finally:
        conn.close()


@app.route('/api/auth/login', methods=['POST'])
def login():
    print("Login request received")
    data = request.get_json() or {}
    print(f"Data: {data}")
    username = (data.get('username') or '').strip().lower()
    password = data.get('password', '')

    if not username or not password:
        print("Missing fields")
        return jsonify({'success': False, 'message': 'Completa todos los campos.'}), 400

    conn = get_db()
    row = conn.execute('SELECT id, password_hash FROM users WHERE username = ?', (username,)).fetchone()
    conn.close()
    if not row or hash_password(password) != row['password_hash']:
        print(f"Invalid login for {username}")
        return jsonify({'success': False, 'message': 'Usuario o contraseña incorrectos.'}), 401

    session['username'] = username
    print(f"User {username} logged in")
    return jsonify({'success': True, 'user': username, 'userId': row['id']})


@app.route('/api/auth/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({'success': True})


@app.route('/api/auth/status', methods=['GET'])
def auth_status():
    username = session.get('username')
    if username:
        user_id = get_user_id(username)
        return jsonify({'success': True, 'user': username, 'userId': user_id})
    return jsonify({'success': False}), 401


def get_user_id(username):
    conn = get_db()
    user = conn.execute('SELECT id FROM users WHERE username = ?', (username,)).fetchone()
    conn.close()
    return user['id'] if user else None


@app.route('/api/products', methods=['GET', 'POST'])
def products():
    if request.method == 'POST':
        payload = request.get_json() or {}
        product_id = payload.get('id')
        name = payload.get('name')
        price = payload.get('price')
        image = payload.get('image')
        category = payload.get('category')
        if not product_id or not name or price is None:
            return jsonify({'success': False, 'message': 'Datos de producto incompletos.'}), 400
        conn = get_db()
        try:
            with conn:
                conn.execute('INSERT OR IGNORE INTO products (id, name, price, image, category) VALUES (?, ?, ?, ?, ?)',
                             (product_id, name, price, image, category))
        finally:
            conn.close()
        return jsonify({'success': True})

    conn = get_db()
    rows = conn.execute('SELECT id, name, price, image, category FROM products').fetchall()
    conn.close()
    products_list = [dict(row) for row in rows]
    return jsonify({'products': products_list})


@app.route('/api/cart', methods=['GET', 'POST'])
def cart():
    username = session.get('username')
    if not username:
        return jsonify({'success': False, 'message': 'No autenticado.'}), 401
    user_id = get_user_id(username)
    if request.method == 'GET':
        conn = get_db()
        rows = conn.execute(
            'SELECT c.product_id, p.name, p.price, p.image, c.quantity FROM carts c JOIN products p ON c.product_id = p.id WHERE c.user_id = ?',
            (user_id,)
        ).fetchall()
        conn.close()
        return jsonify({'items': [dict(row) for row in rows]})

    data = request.get_json() or {}
    product_id = data.get('productId')
    quantity = int(data.get('quantity', 1))
    if not product_id or quantity < 0:
        return jsonify({'success': False, 'message': 'Datos de carrito inválidos.'}), 400
    conn = get_db()
    existing = conn.execute('SELECT quantity FROM carts WHERE user_id = ? AND product_id = ?', (user_id, product_id)).fetchone()
    with conn:
        if quantity == 0:
            conn.execute('DELETE FROM carts WHERE user_id = ? AND product_id = ?', (user_id, product_id))
        elif existing:
            conn.execute('UPDATE carts SET quantity = ? WHERE user_id = ? AND product_id = ?', (quantity, user_id, product_id))
        else:
            conn.execute('INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?)', (user_id, product_id, quantity))
    conn.close()
    return jsonify({'success': True})


@app.route('/api/cart/<product_id>', methods=['DELETE'])
def remove_cart_item(product_id):
    username = session.get('username')
    if not username:
        return jsonify({'success': False, 'message': 'No autenticado.'}), 401
    user_id = get_user_id(username)
    conn = get_db()
    with conn:
        conn.execute('DELETE FROM carts WHERE user_id = ? AND product_id = ?', (user_id, product_id))
    conn.close()
    return jsonify({'success': True})


@app.route('/api/favorites', methods=['GET'])
def get_favorites():
    username = session.get('username')
    if not username:
        return jsonify({'success': False, 'message': 'No autenticado.'}), 401
    user_id = get_user_id(username)
    conn = get_db()
    rows = conn.execute(
        'SELECT f.product_id, p.name, p.price, p.image FROM favorites f JOIN products p ON f.product_id = p.id WHERE f.user_id = ?',
        (user_id,)
    ).fetchall()
    conn.close()
    return jsonify({'favorites': [dict(row) for row in rows]})


@app.route('/api/favorites/<product_id>', methods=['POST', 'DELETE'])
def toggle_favorite(product_id):
    username = session.get('username')
    if not username:
        return jsonify({'success': False, 'message': 'No autenticado.'}), 401
    user_id = get_user_id(username)
    conn = get_db()
    existing = conn.execute('SELECT id FROM favorites WHERE user_id = ? AND product_id = ?', (user_id, product_id)).fetchone()
    
    if request.method == 'POST':
        if not existing:
            with conn:
                conn.execute('INSERT INTO favorites (user_id, product_id) VALUES (?, ?)', (user_id, product_id))
        conn.close()
        return jsonify({'success': True, 'favorited': True})
    
    # DELETE
    with conn:
        conn.execute('DELETE FROM favorites WHERE user_id = ? AND product_id = ?', (user_id, product_id))
    conn.close()
    return jsonify({'success': True, 'favorited': False})


@app.route('/<path:path>')
def static_proxy(path):
    if os.path.exists(BASE_DIR / path):
        return send_from_directory('.', path)
    return send_from_directory('.', 'index.html')


@app.route('/')
def root():
    return send_from_directory('.', 'index.html')


if __name__ == '__main__':
    init_db()
    app.run(host='127.0.0.1', port=5000, debug=True)
