<?php

header('Content-Type: application/json');

ini_set('session.use_only_cookies', 1);
ini_set('session.use_trans_sid', 0);

session_set_cookie_params([
    'lifetime' => 86400,
    'path' => '/',
    'secure' => false, // true SOLO con HTTPS
    'httponly' => true,
    'samesite' => 'Lax'
]);

if (session_status() === PHP_SESSION_NONE) {
require_once __DIR__ . '/config.php';
}