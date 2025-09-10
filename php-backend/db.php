<?php
$pdo = new PDO('sqlite:' . __DIR__ . '/app.db');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec("CREATE TABLE IF NOT EXISTS leads (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone TEXT, source TEXT, status TEXT DEFAULT 'NEW', created_at TEXT DEFAULT (datetime('now')))");
?>
