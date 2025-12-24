<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed"]);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

// TODO: REPLACE WITH YOUR KEY MANUALLY ON THE SERVER TO AVOID COMMITTING IT TO GIT
$apiKey = "YOUR_BREVO_V3_API_KEY_HERE";
$templateId = 7;

$payload = [
    "templateId" => $templateId,
    "to" => [
        ["email" => "info@akkecsgroup.com", "name" => "Akkecs Group Admin"]
    ],
    "params" => [
        "name" => $input['name'] ?? 'N/A',
        "email" => $input['email'] ?? 'N/A',
        "company" => $input['company'] ?? 'N/A',
        "phone" => $input['phone'] ?? 'N/A',
        "message" => $input['message'] ?? 'N/A'
    ]
];

$ch = curl_init("https://api.brevo.com/v3/smtp/email");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "api-key: $apiKey",
    "Content-Type: application/json",
    "Accept: application/json"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

echo $response;
?>