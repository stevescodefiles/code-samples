<?php
$db = new mysqli('localhost', 'root', '', 'test');

$sql = "SELECT * FROM notes";

$result=mysqli_query($db,$sql);

$authors = array();

// Associative array
while( $row=mysqli_fetch_assoc($result) ) {
    $authors[] = $row;
}

return print_r(json_encode($authors));