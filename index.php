<?php
header("Cache-Control: no-cache, must-revalidate"); 
header("Expires: Sat, 26 Jul 1997 05:00:00 GMT");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
       <title>Charts</title>

</head>
<body>
    <h2>Ejemplos de Gráficos</h2>
    <div class="container">
        <div class="chart">
            <canvas id="barchart" width="300" height="300"></canvas>
        </div>
        <div class="chart">
            <canvas id="barchart2" width="300" height="300"></canvas>
        </div>
        <div class="chart">
            <canvas id="linea" width="400" height="400"></canvas>
        </div>
        <div class="chart">
            <canvas id="bubbles" width="400" height="400"></canvas>
        </div>
        <div class="chart">
            <canvas id="mixed" width="400" height="400"></canvas>
        </div>
        <div class="chart">
            <canvas id="polar" width="400" height="400"></canvas>
        </div>
        <div class="chart">
            <canvas id="radial" width="400" height="400"></canvas>
        </div>
    </div>

    <script>
        
      </script>
    <script src="./js/chart1.js"></script> <!--barra listo-->
    <script src="./js/chart2.js"></script> <!--pie listo-->
    <script src="./js/chart3.js"></script> <!--lineal listo-->
    <script src="./js/chart4.js"></script> <!--burbuja listo-->
    <script src="./js/chart5.js"></script> <!--Mixedlisto-->
    <script src="./js/chart6.js"></script> <!--Polar-->
    <script src="./js/chart7.js"></script> <!--Radar listo-->
</body>
</html>