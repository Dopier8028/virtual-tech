<?php
<<<<<<< HEAD
header('Content-Type: application/json');
session_set_cookie_params([
    'lifetime' => 86400,
    'path' => '/',
    'httponly' => false,
    'samesite' => 'Lax'
]);

session_start();
=======

header('Content-Type: application/json');

if (session_status() === PHP_SESSION_NONE) {

    session_set_cookie_params([
        'lifetime' => 86400,
        'path' => '/',
        'domain' => '',
        'secure' => false,
        'httponly' => true,
        'samesite' => 'Lax'
    ]);

require_once __DIR__ . '/config.php';
}

require_once __DIR__ . '/db.php';

if (session_status() === PHP_SESSION_NONE) {

    session_set_cookie_params([
        'lifetime' => 86400,
        'path' => '/',
        'domain' => '',
        'secure' => false, // true SOLO si usas HTTPS
        'httponly' => true,
        'samesite' => 'Lax'
    ]);

require_once __DIR__ . '/config.php';
}
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
require_once __DIR__ . '/db.php';

function respond($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit;
}

function get_request_body() {
    $raw = file_get_contents('php://input');
    if (!$raw) {
        return null;
    }
    $data = json_decode($raw, true);
    if ($data === null && trim($raw) !== '') {
        respond(['success' => false, 'message' => 'Invalid JSON body'], 400);
    }
    return $data;
}

function api_get_current_user() {
    if (empty($_SESSION['user_id'])) {
        return null;
    }
    $conn = get_db();
    $stmt = $conn->prepare('SELECT id, username FROM users WHERE id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    return $stmt->fetch();
}

function api_require_login() {
    $user = api_get_current_user();
    if (!$user) {
        respond(['success' => false, 'message' => 'Authentication required'], 401);
    }
    return $user;
}

$action = isset($_GET['action']) ? $_GET['action'] : '';
$method = $_SERVER['REQUEST_METHOD'];
$body = get_request_body();
$conn = get_db();

switch ($action) {
    case 'status':
        $user = api_get_current_user();
        respond(['success' => true, 'user' => $user]);
        break;

    case 'register':
        if ($method !== 'POST') {
            respond(['success' => false, 'message' => 'Method not allowed'], 405);
        }
        if (empty($body['username']) || empty($body['password'])) {
            respond(['success' => false, 'message' => 'Username and password are required'], 400);
        }
        $username = trim($body['username']);
        $passwordHash = hash_password($body['password']);
        try {
            $stmt = $conn->prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)');
            $stmt->execute([$username, $passwordHash]);
            $userId = $conn->lastInsertId();
<<<<<<< HEAD
session_regenerate_id(true);

$_SESSION['user_id'] = $userId;
=======
            $_SESSION['user_id'] = $userId;
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
            respond(['success' => true, 'user' => ['id' => $userId, 'username' => $username]]);
        } catch (PDOException $e) {
            if ($e->getCode() === '23000') {
                respond(['success' => false, 'message' => 'Username already exists'], 409);
            }
            respond(['success' => false, 'message' => 'Registration failed'], 500);
        }
        break;

    case 'login':
        if ($method !== 'POST') {
            respond(['success' => false, 'message' => 'Method not allowed'], 405);
        }
        if (empty($body['username']) || empty($body['password'])) {
            respond(['success' => false, 'message' => 'Username and password are required'], 400);
        }
        $username = trim($body['username']);
        $passwordHash = hash_password($body['password']);
        $stmt = $conn->prepare('SELECT id, username FROM users WHERE username = ? AND password_hash = ?');
        $stmt->execute([$username, $passwordHash]);
        $user = $stmt->fetch();
        if (!$user) {
            respond(['success' => false, 'message' => 'Invalid login credentials'], 401);
        }
<<<<<<< HEAD
session_regenerate_id(true);

$_SESSION['user_id'] = $user['id'];
=======
        $_SESSION['user_id'] = $user['id'];
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        respond(['success' => true, 'user' => $user]);
        break;

    case 'logout':
        if ($method !== 'POST') {
            respond(['success' => false, 'message' => 'Method not allowed'], 405);
        }
        session_unset();
        session_destroy();
        respond(['success' => true, 'user' => null]);
        break;

    case 'products':
        if ($method === 'GET') {
<<<<<<< HEAD
            if (isset($_GET['id'])) {
                $stmt = $conn->prepare('SELECT codigo as id, nombre as name, descripcion as description, precio as price, stock, img as image, categoria as category FROM products WHERE codigo = ?');
                $stmt->execute([$_GET['id']]);
                $product = $stmt->fetch();
                if ($product) {
                    respond(['success' => true, 'product' => $product]);
                } else {
                    respond(['success' => false, 'message' => 'Product not found'], 404);
                }
            } else {
                $stmt = $conn->query('SELECT codigo as id, nombre as name, precio as price, img as image, categoria as category FROM products');
                respond(['success' => true, 'products' => $stmt->fetchAll()]);
            }
=======
            $stmt = $conn->query('SELECT codigo as id, nombre as name, precio as price, img as image, categoria as category FROM products');
            respond(['success' => true, 'products' => $stmt->fetchAll()]);
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        }
        if ($method === 'POST') {
            if (empty($body['id']) || empty($body['name']) || !isset($body['price'])) {
                respond(['success' => false, 'message' => 'Product id, name and price are required'], 400);
            }
            $stmt = $conn->prepare('INSERT OR IGNORE INTO products (codigo, nombre, precio, img, categoria) VALUES (?, ?, ?, ?, ?)');
            $stmt->execute([
                $body['id'],
                $body['name'],
                $body['price'],
                isset($body['image']) ? $body['image'] : null,
                isset($body['category']) ? $body['category'] : null
            ]);
            respond(['success' => true, 'product' => $body]);
        }
        respond(['success' => false, 'message' => 'Method not allowed'], 405);
        break;

    case 'cart':
        $user = api_require_login();
        if ($method === 'GET') {
            $stmt = $conn->prepare('SELECT c.product_id, c.quantity, p.nombre as name, p.precio as price, p.img as image, p.categoria as category FROM carts c JOIN products p ON c.product_id = p.codigo WHERE c.user_id = ?');
            $stmt->execute([$user['id']]);
<<<<<<< HEAD
            $items = $stmt->fetchAll();
            respond(['success' => true, 'cart' => $items, 'items' => $items]);
=======
            respond(['success' => true, 'cart' => $stmt->fetchAll()]);
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        }
        if ($method === 'POST') {
            if (empty($body['product_id']) || !isset($body['quantity'])) {
                respond(['success' => false, 'message' => 'Product ID and quantity are required'], 400);
            }
            $quantity = intval($body['quantity']);
            if ($quantity <= 0) {
                $stmt = $conn->prepare('DELETE FROM carts WHERE user_id = ? AND product_id = ?');
                $stmt->execute([$user['id'], $body['product_id']]);
                respond(['success' => true]);
            }
<<<<<<< HEAD
            try {
                $stmt = $conn->prepare('UPDATE carts SET quantity = ? WHERE user_id = ? AND product_id = ?');
                $stmt->execute([$quantity, $user['id'], $body['product_id']]);
                
                if ($conn->query('SELECT changes()')->fetchColumn() == 0) {
                    $stmt = $conn->prepare('INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?)');
                    $stmt->execute([$user['id'], $body['product_id'], $quantity]);
                }
=======
            $stmt = $conn->prepare('INSERT INTO carts (user_id, product_id, quantity) VALUES (?, ?, ?) ON CONFLICT(user_id, product_id) DO UPDATE SET quantity = excluded.quantity');
            try {
                $stmt->execute([$user['id'], $body['product_id'], $quantity]);
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
                respond(['success' => true]);
            } catch (PDOException $e) {
                respond(['success' => false, 'message' => 'Unable to update cart'], 500);
            }
        }
        respond(['success' => false, 'message' => 'Method not allowed'], 405);
        break;

<<<<<<< HEAD
    case 'cart-remove':
        $user = api_require_login();
        $productId = isset($_GET['product_id']) ? $_GET['product_id'] : null;
        if (!$productId) {
            respond(['success' => false, 'message' => 'Product ID is required'], 400);
        }
        $stmt = $conn->prepare('DELETE FROM carts WHERE user_id = ? AND product_id = ?');
        $stmt->execute([$user['id'], $productId]);
        respond(['success' => true]);
        break;

    case 'favorite-toggle':
=======
case 'cart-remove':

        $user = api_require_login();

        $productId = isset($_GET['product_id']) ? $_GET['product_id'] : null;

        if (!$productId) {
            respond(['success' => false, 'message' => 'Product ID is required'], 400);
        }

        $stmt = $conn->prepare('DELETE FROM carts WHERE user_id = ? AND product_id = ?');

        $stmt->execute([
            $user['id'],
            $productId
        ]);

        respond(['success' => true]);

        break;

case 'favorite-toggle':

>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        $user = api_require_login();
        $productId = isset($_GET['product_id']) ? $_GET['product_id'] : null;
        if (!$productId) {
            respond(['success' => false, 'message' => 'Product ID is required'], 400);
        }
        $stmt = $conn->prepare('SELECT id FROM favorites WHERE user_id = ? AND product_id = ?');
        $stmt->execute([$user['id'], $productId]);
        $favorite = $stmt->fetch();
        if ($favorite) {
            $stmt = $conn->prepare('DELETE FROM favorites WHERE id = ?');
            $stmt->execute([$favorite['id']]);
            respond(['success' => true, 'favorite' => false]);
<<<<<<< HEAD
        } else {
            $stmt = $conn->prepare('INSERT INTO favorites (user_id, product_id) VALUES (?, ?)');
            $stmt->execute([$user['id'], $productId]);
            respond(['success' => true, 'favorite' => true]);
        }
        break;

    case 'favorites':
        $user = api_require_login();
        if ($method === 'GET') {
            $stmt = $conn->prepare('SELECT f.product_id, p.nombre as name, p.precio as price, p.img as image, p.categoria as category FROM favorites f JOIN products p ON f.product_id = p.codigo WHERE f.user_id = ? ORDER BY f.id DESC');
            $stmt->execute([$user['id']]);
            respond(['success' => true, 'favorites' => $stmt->fetchAll()]);
        }
        respond(['success' => false, 'message' => 'Method not allowed'], 405);
=======
        }
        $stmt = $conn->prepare('INSERT INTO favorites (user_id, product_id) VALUES (?, ?)');
        $stmt->execute([$user['id'], $productId]);
        respond(['success' => true, 'favorite' => true]);
>>>>>>> 6a88c9759fcef1fbb3ea5581f70daca6315b7091
        break;

    default:
        respond(['success' => false, 'message' => 'Unknown action'], 400);
        break;
}
