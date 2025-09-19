<?php
header('Content-Type: application/json');

// POST ile gelen veriyi al
$data = json_decode(file_get_contents('php://input'), true);
$id_wormate = $data['id_wormate'] ?? '';
$username   = $data['name'] ?? '';

// Kullanıcı verisini uzaktaki URL'den çek
$usersUrl = "https://foghunter06.github.io/ozel/data.json; // buraya users.json dosyanın URL'sini koy
$usersJson = file_get_contents($usersUrl);

if (!$usersJson) {
    echo json_encode([
        "status" => "inactive",
        "is_subscriber" => false,
        "error" => "Kullanıcı verisi alınamadı"
    ]);
    exit;
}

$users = json_decode($usersJson, true);

// Kullanıcı bulunamazsa
if (!isset($users[$id_wormate]) || $users[$id_wormate]['username'] !== $username) {
    echo json_encode([
        "status" => "inactive",
        "is_subscriber" => false
    ]);
    exit;
}

// Kullanıcı durumu
$active = $users[$id_wormate]['active'];

// Kullanıcının durumuna göre JSON'u oluştur
$baseJson = [
    "streamer" => $username,
    "extension" => "wormup",
    "game" => "Wormate.io",
    "note" => "Please don't copy my code",
    "programmer" => "TeamUP",
    "e" => "empty",
    "z" => "c",
    "s11" => "...", // buraya kendi büyük s11 verinizi koy
    "sw" => 1,
    "tt" => 1,
    "vs" => 142,
    "dsg" => [
        "100|491",
        "104|492",
        "133|494",
        "1002|703"
    ],
    "propertyList" => $active ? [
        ["id"=>386,"type"=>"SKIN"],
        ["id"=>387,"type"=>"SKIN"],
        ["id"=>388,"type"=>"SKIN"],
        ["id"=>429,"type"=>"HAT"]
    ] : [],
    "cc" => "<style></style><div id=\"div_map\"></div>",
    "mb" => "<div class='info-message warning'>Abonelik yok</div>",
    "ccc" => "iq",
    "ccg" => [],
    "status" => $active ? "active" : "inactive",
    "is_subscriber" => $active,
    "show_discord" => true,
    "discord_button" => "<div>Discord Link</div>",
    "server_time" => date("Y-m-d H:i:s")
];

echo json_encode($baseJson, JSON_PRETTY_PRINT);
