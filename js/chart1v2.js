 
 
 function barras(legend="") {

     // Cargar los datos desde data.json- los toma desde el html
     fetch('php/getDataChart1v2.php?legend='+legend)
         .then(response => response.json())
         .then(data1 => {
             console.log (data1);

             // Crear el gráfico con los datos modificados
             var ctx1 = document.getElementById('barchart');

             // Check if there's an existing chart
            if (window.barchart) {
                window.barchart.destroy(); // Destroy the old chart
            }

             window.barchart = new Chart(ctx1, {
                 type: 'bar',
                 data: data1,
                 options: {
                        onClick: (e) => {

                            //alert()
                        },
                    indexAxis: 'y',
                    scales: {
                        y: {
                             beginAtZero: true
                        }
                    },
                    plugins: {
                    legend: {
                        onClick: newLegendClickHandler
                    },
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            color: 'red',
                            formatter: function (value, context) {
                                return value;
                            }
                         }
                     }
                 }
             });
         })
         //captura el error si es que existe algúno 
         .catch(error => console.error('Error al cargar los datos de barra: ', error));




 };



 function newLegendClickHandler(e, legendItem, legend) {

    var index = legendItem.datasetIndex;
    //console.log(legendItem)

    barras(legendItem.text)

}
  document.addEventListener('DOMContentLoaded', barras ());
