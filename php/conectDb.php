<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "tablero";
$port = 3360;

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $dbname,$port);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);

}


// Cerrar la conexión
// $conn->close();
?>
