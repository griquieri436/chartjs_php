<?php
include 'conectDb.php';

$sql = "SELECT COUNT(*) AS total_expedientes, tipoexpediente FROM facturacion GROUP BY tipoexpediente ORDER BY tipoexpediente ASC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Inicializar arrays
    $labels = [];
    $dataSet1 = [];
    $dataSet2 = [];
    $dataSet3 = [];

    // Conectar a la base de datos y ejecutar la consulta adicional
    $sql = "SELECT 
                ROUND(AVG(diastrabajados), 2) AS prom_dias_trabajados_pexp, 
                tipoexpediente 
            FROM facturacion 
            GROUP BY tipoexpediente ORDER BY tipoexpediente ASC";

    $result2 = $conn->query($sql);

    // Conectar a la base de datos y ejecutar la consulta adicional - CANTIDAD DE DÌAS EN EL AREA
    $sql = "SELECT 
                ROUND(AVG(diasenarea), 2) AS prom_dias_en_area, 
                tipoexpediente 
            FROM facturacion 
            GROUP BY tipoexpediente ORDER BY tipoexpediente ASC";

    $result3 = $conn->query($sql);

    foreach ($result3 as $row) {
        // $labels[] = $row['tipoexpediente'];
        $dataSet3[] = round($row['prom_dias_en_area']);
    }
    
    // Recorrer los resultados de la consulta adicional y agregar datos a dataSet2
    foreach ($result2 as $row) {
        $labels[] = $row['tipoexpediente'];
        $dataSet2[] = round($row['prom_dias_trabajados_pexp']);
    }

    // Recorrer los resultados de la consulta original
    foreach ($result as $row) {
        // $labels[] = $row['tipoexpediente'];
        $dataSet1[] = $row['total_expedientes'];
    }

    // Construir el array final
    $data = array(
        'labels' => $labels,
        'datasets' => array(
            array(
                'data' => $dataSet1,
                'label' => '# de Expedientes trabajados por Usuario',
                'borderWidth' => 1
            ),
            array(
                'data' => $dataSet2,
                'label' => 'Promedio de Días Trabajados por Tipo de Expediente',
                'borderWidth' => 1
            ),array(
                'data' => $dataSet3,
                'label' => 'CANTIDAD DE DÌAS EN EL AREA',
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