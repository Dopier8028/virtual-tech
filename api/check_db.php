<?php
require __DIR__ . '/db.php';

$conn = get_db();

echo "=== USUARIOS ===\n";
$stmt = $conn->query('SELECT * FROM users');
$users = $stmt->fetchAll();
foreach ($users as $u) {
    echo "ID: {$u['id']}, User: {$u['username']}\n";
}

echo "\n=== FAVORITOS ===\n";
$stmt = $conn->query('SELECT f.id, f.user_id, f.product_id, p.nombre as name FROM favorites f LEFT JOIN products p ON f.product_id = p.codigo ORDER BY f.user_id');
$favorites = $stmt->fetchAll();
foreach ($favorites as $fav) {
    echo "ID: {$fav['id']}, User: {$fav['user_id']}, Product: {$fav['product_id']}, Name: {$fav['name']}\n";
}

echo "\n=== PRODUCTOS ===\n";
$stmt = $conn->query('SELECT codigo, nombre, precio FROM products LIMIT 10');
$products = $stmt->fetchAll();
foreach ($products as $p) {
    echo "Code: {$p['codigo']}, Name: {$p['nombre']}, Price: {$p['precio']}\n";
}

echo "\n=== CARRITO ===\n";
$stmt = $conn->query('SELECT c.id, c.user_id, c.product_id, c.quantity, p.nombre as name FROM carts c LEFT JOIN products p ON c.product_id = p.codigo ORDER BY c.user_id');
$carts = $stmt->fetchAll();
if (empty($carts)) {
    echo "Carrito vacío\n";
} else {
    foreach ($carts as $cart) {
        echo "ID: {$cart['id']}, User: {$cart['user_id']}, Product: {$cart['product_id']}, Qty: {$cart['quantity']}, Name: {$cart['name']}\n";
    }
}
?>
