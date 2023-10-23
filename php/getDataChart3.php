<?php
include 'conectDb.php';

//$sql = "SELECT * FROM expediente ORDER BY usuario,fojas";
$sql = "SELECT COUNT(*) AS total_expedientes, departamento FROM expediente GROUP BY departamento ORDER BY total_expedientes ASC";
$result = $conn->query($sql);

$data = array(
'labels' => array(), 
'datasets' => array(
    array(
        'data' => array(),
        'backgroundColor' => array()
)));


// Iterar sobre los elementos de 'labels' y generar colores aleatorios
foreach ($data['labels'] as $label) {
    $data['datasets'][0]['data'][] = 0; // Puedes asignar un valor inicial si es necesario
    $data['datasets'][0]['backgroundColor'][] = getRandomColor();
}

if ($result->num_rows > 0) {
    // Inicializar arrays
    $labels = [];
    $dataSet = [];

    // Recorrer los resultados con foreach
    foreach ($result as $row) {
        $labels[] = $row['departamento'];
        $dataSet[] = $row['total_expedientes'];
    }

    // Construir el array final
    $data['labels'] = $labels;
    $data['datasets'][0]['data'] = $dataSet;

    // Convertir el array en formato JSON
    $json_data = json_encode($data);

    echo $json_data;
} else {
    echo "No se encontraron resultados para crear el archivo JSON.";
}



