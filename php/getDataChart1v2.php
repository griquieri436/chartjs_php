<?php
include 'conectDb.php';

if (isset($_GET['legend']) && !empty($_GET['legend'])) {
    //echo "string";
}

//$sql = "SELECT * FROM expediente ORDER BY usuario,fojas";
// $sql = "SELECT COUNT(*) AS total_expedientes, tipoexpediente FROM facturacion GROUP BY tipoexpediente ORDER BY total_expedientes ASC";
// $result = $conn->query($sql);

$sql = "SELECT DISTINCT tipoexpediente FROM facturacion";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Inicializar arrays
    $labels = [];
    $dataSet1 = [];
    $dataSet2 = [];

    // Conectar a la base de datos y ejecutar la consulta adicional
    $sql = "SELECT 
                ROUND(AVG(diastrabajados), 2) AS prom_dias_trabajados_pexp, 
                tipoexpediente 
            FROM facturacion 
            GROUP BY tipoexpediente";

    $result2 = $conn->query($sql);

    // Recorrer los resultados de la consulta adicional y agregar datos a dataSet2
    foreach ($result2 as $row) {
        $labels[] = $row['tipoexpediente'];
        $dataSet2[] = $row['prom_dias_trabajados_pexp'];
    }

    // Recorrer los resultados de la consulta original
    foreach ($result as $row) {
        $labels[] = $row['tipoexpediente'];
        $sql = "SELECT COUNT(*) AS total_expedientes FROM facturacion WHERE tipoexpediente = '" . $row['tipoexpediente'] . "'";
        $result3 = $conn->query($sql);
        $row3 = $result3->fetch_assoc();
        $dataSet1[] = $row3['total_expedientes'];
    }

    // Construir el array final
    $data = array(
        'labels' => $labels,
        'datasets' => array(
            array(
                'data' => $dataSet1,
                'label' => 'Total de expedientes',
                'borderWidth' => 1
            ),
            array(
                'data' => $dataSet2,
                'label' => 'Promedio de Días Trabajados por Tipo de Expediente',
                'borderWidth' => 1
            )
        )
    );

    // Convertir el array en formato JSON
    $json_data = json_encode($data);
    echo $json_data;

} else {
    echo "No se encontraron resultados para crear el archivo JSON.";
}
