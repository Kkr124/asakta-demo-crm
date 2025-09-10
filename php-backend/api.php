<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit; }
require 'db.php';
$method = $_SERVER['REQUEST_METHOD'];
$path = $_GET['path'] ?? '';

if ($method === 'GET' && $path === 'leads') {
  $q = $_GET['q'] ?? '';
  $status = $_GET['status'] ?? '';
  $sql = "SELECT * FROM leads WHERE 1=1";
  $params = [];
  if ($q) { $sql .= " AND (name LIKE :q OR email LIKE :q OR source LIKE :q)"; $params[':q'] = "%$q%"; }
  if ($status) { $sql .= " AND status = :status"; $params[':status'] = $status; }
  $sql .= " ORDER BY id DESC";
  $stmt = $pdo->prepare($sql); $stmt->execute($params);
  echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
}
elseif ($method === 'POST' && $path === 'leads') {
  $data = json_decode(file_get_contents('php://input'), true);
  $stmt = $pdo->prepare("INSERT INTO leads(name,email,phone,source,status) VALUES(?,?,?,?,?)");
  $stmt->execute([$data['name'], $data['email'], $data['phone'] ?? null, $data['source'] ?? null, $data['status'] ?? 'NEW']);
  $id = $pdo->lastInsertId();
  echo json_encode(['id'=>$id] + $data);
}
elseif ($method === 'PUT' && preg_match('#leads/(\d+)#', $path, $m)) {
  $id = (int)$m[1];
  $data = json_decode(file_get_contents('php://input'), true);
  $fields = [];$params=[];
  foreach(['name','email','phone','source','status'] as $f){ if(isset($data[$f])){ $fields[] = "$f = :$f"; $params[":$f"]=$data[$f]; }}
  if(!$fields){ http_response_code(400); echo json_encode(['error'=>'No fields']); exit; }
  $params[':id']=$id;
  $pdo->prepare("UPDATE leads SET ".implode(',', $fields)." WHERE id=:id")->execute($params);
  echo json_encode(['ok'=>true]);
}
elseif ($method === 'DELETE' && preg_match('#leads/(\d+)#', $path, $m)) {
  $id = (int)$m[1];
  $pdo->prepare("DELETE FROM leads WHERE id=?")->execute([$id]);
  http_response_code(204);
}
else { http_response_code(404); echo json_encode(['error'=>'Not found']); }
