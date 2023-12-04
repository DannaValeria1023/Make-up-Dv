<?php
// Configuración de la base de datos
$servername = "localhost"; 
$username = "root";
$password = "";
$dbname = "maquillaje";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión a la base de datos falló: " . $conn->connect_error);
}

// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$puntuacion = $_POST['puntuacion'];
$comentario = $_POST['comentario'];

// Insertar la reseña en la base de datos
$sql = "INSERT INTO reseñas (nombre, puntuacion, comentario) VALUES ('$nombre', '$puntuacion', '$comentario')";

if ($conn->query($sql) === TRUE) {
    echo "Reseña guardada exitosamente.";
} else {
    echo "Error al guardar la reseña: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
