<?php
include 'conectDb.php';

//CONSULTA QUE CALCULA EL PROMEDIO Y REDONDEA LOS DÌAS TRABAJADOS POR TIPOS DE EXPEDIENTES
$sql = "SELECT 
            ROUND(AVG(diastrabajados), 2) AS prom_dias_trabajados_pexp, 
            tipoexpediente, 
            (SELECT ROUND(AVG(diastrabajados), 2) FROM facturacion WHERE tipoexpediente = 'Factura Prestaciones') AS dias_facturaprestaciones 
        FROM facturacion 
        GROUP BY tipoexpediente;";
//CALCULAR EL PROMEDIO DE DÌAS POR TIPO DE EXPEDIENTE 

$result = $conn->query($sql);

$data = array(
'labels' => array(), 
'datasets' => array(
    array(
        'data' => array(),
        'label' => '# ',
        'borderWidth' => 1
)));

if ($result->num_rows > 0) {
    // Inicializar arrays
    $labels = [];
    $dataSet = [];

    // Recorrer los resultados con foreach
    foreach ($result as $row) {
        $labels[] = $row['tipoexpediente'];
        $dataSet[] = round($row['prom_dias_trabajados_pexp']);
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



