<?php
// Database configuration
<<<<<<< HEAD
$db_path = __DIR__ . '/../database/ogani.db';
=======
$db_path = __DIR__ . '/../ogani.db';
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091

function get_db() {
    global $db_path;
    $conn = new PDO('sqlite:' . $db_path);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    return $conn;
}

function init_db() {
    global $db_path;
    
    if (file_exists($db_path)) {
        return;
    }
    
    $conn = get_db();
    
    $conn->exec('CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL
    )');
    
    $conn->exec('CREATE TABLE products (
<<<<<<< HEAD
        codigo TEXT PRIMARY KEY,
        nombre TEXT NOT NULL,
        descripcion TEXT,
        precio REAL NOT NULL,
        stock INTEGER,
        img TEXT,
        categoria TEXT
=======
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        image TEXT,
        category TEXT
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    )');
    
    $conn->exec('CREATE TABLE carts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
<<<<<<< HEAD
        FOREIGN KEY(product_id) REFERENCES products(codigo)
=======
        FOREIGN KEY(product_id) REFERENCES products(id)
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    )');
    
    $conn->exec('CREATE TABLE favorites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        product_id TEXT NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
<<<<<<< HEAD
        FOREIGN KEY(product_id) REFERENCES products(codigo)
    )');
    
    $products = [
        ['p0001', 'Ejemplo Producto 1', 'Descripción del producto 1', 100.0, 10, 'img/product/default.jpg', 'Categoría'],
        ['p0002', 'Ejemplo Producto 2', 'Descripción del producto 2', 199.0, 8, 'img/product/default.jpg', 'Categoría'],
        ['p0003', 'Ejemplo Producto 3', 'Descripción del producto 3', 299.0, 5, 'img/product/default.jpg', 'Categoría'],
        ['p0004', 'Ejemplo Producto 4', 'Descripción del producto 4', 399.0, 3, 'img/product/default.jpg', 'Categoría'],
        ['p0005', 'Ejemplo Producto 5', 'Descripción del producto 5', 499.0, 2, 'img/product/default.jpg', 'Categoría']
    ];
    
    $stmt = $conn->prepare('INSERT INTO products (codigo, nombre, descripcion, precio, stock, img, categoria) VALUES (?, ?, ?, ?, ?, ?, ?)');
=======
        FOREIGN KEY(product_id) REFERENCES products(id)
    )');
    
    $products = [
        ['1', 'Crab Pool Security', 30.00, 'img/featured/feature-1.jpg', 'electronics'],
        ['2', 'Fresh Garden Vegetable', 39.00, 'img/featured/feature-2.jpg', 'vegetables'],
        ['3', 'Organic Bananas', 69.00, 'img/featured/feature-3.jpg', 'fastfood'],
        ['4', 'Premium Apples', 55.00, 'img/featured/feature-4.jpg', 'fruits'],
        ['5', 'Fresh Tomatoes', 45.00, 'img/featured/feature-5.jpg', 'vegetables'],
        ['6', 'Organic Carrots', 25.00, 'img/featured/feature-6.jpg', 'vegetables'],
        ['7', 'Fresh Lettuce', 15.00, 'img/cart/cart-1.jpg', 'vegetables'],
        ['8', 'Organic Oranges', 35.00, 'img/cart/cart-2.jpg', 'fruits'],
        ['9', 'Premium Grapes', 48.00, 'img/cart/cart-3.jpg', 'fruits']
    ];
    
    $stmt = $conn->prepare('INSERT INTO products (id, name, price, image, category) VALUES (?, ?, ?, ?, ?)');
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
    foreach ($products as $product) {
        $stmt->execute($product);
    }
}

function get_user_id($username) {
    $conn = get_db();
    $stmt = $conn->prepare('SELECT id FROM users WHERE username = ?');
    $stmt->execute([$username]);
    $result = $stmt->fetch();
    return $result ? $result['id'] : null;
}

function hash_password($password) {
    return hash('sha256', $password);
}

// Initialize database on first load
init_db();
