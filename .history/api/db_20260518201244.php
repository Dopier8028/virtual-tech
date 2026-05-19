<?php
// Database configuration
$db_path = __DIR__ . '/../database/ogani.db';

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
        codigo TEXT PRIMARY KEY,
        nombre TEXT NOT NULL,
        descripcion TEXT,
        precio REAL NOT NULL,
        stock INTEGER,
        img TEXT,
        categoria TEXT
    )');
    
    $conn->exec('CREATE TABLE carts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        product_id TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(product_id) REFERENCES products(codigo)
    )');
    
    $conn->exec('CREATE TABLE favorites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        product_id TEXT NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
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
