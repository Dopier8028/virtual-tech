<?php
require __DIR__ . '/db.php';

$conn = get_db();

// Limpiar favoritos inválidos
echo "Eliminando favoritos con product_id inválida...\n";
$stmt = $conn->prepare("DELETE FROM favorites WHERE product_id = ? OR product_id = ? OR product_id = ? OR product_id = ?");
$stmt->execute(['favorites', 'cart', 'undefined', '']);

// Verificar que se eliminaron
$stmt = $conn->query('SELECT COUNT(*) as count FROM favorites');
$result = $stmt->fetch();
echo "Total de favoritos después de limpiar: " . $result['count'] . "\n";

// Mostrar los favoritos válidos que quedan
echo "\n=== FAVORITOS VÁLIDOS ===\n";
$stmt = $conn->query('SELECT f.id, f.user_id, f.product_id, p.nombre as name FROM favorites f LEFT JOIN products p ON f.product_id = p.codigo ORDER BY f.user_id');
$favorites = $stmt->fetchAll();
if (empty($favorites)) {
    echo "No hay favoritos válidos\n";
} else {
    foreach ($favorites as $fav) {
        echo "ID: {$fav['id']}, User: {$fav['user_id']}, Product: {$fav['product_id']}, Name: {$fav['name']}\n";
    }
}
?>
