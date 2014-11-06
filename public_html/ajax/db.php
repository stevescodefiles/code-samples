<?php
$db = new mysqli('localhost', 'root', '', 'test');

$data = json_decode(file_get_contents("php://input"));

if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}

$sql = "INSERT INTO notes (label, author) VALUES ('$data->label', '$data->author')";

mysqli_query($db, $sql);