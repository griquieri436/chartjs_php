 
 
 function barras() {

     // Cargar los datos desde data.json- los toma desde el html
     fetch('php/getDataChart1.php')
         .then(response => response.json())
         .then(data1 => {
             console.log (data1);

             // Crear el gráfico con los datos modificados
             const ctx1 = document.getElementById('barchart');

             const barchart = new Chart(ctx1, {
                 type: 'bar',
                 data: data1,
                 options: {
                    indexAxis: 'y',
                    scales: {
                        y: {
                             beginAtZero: true
                        }
                    },
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            color: 'red',
                            formatter: function (value, context) {
                                return value;
                            }
                         },
                        //  legend: {
                        //     position: 'down',
                        //   }
                     }
                 }
             });
         })
         //captura el error si es que existe algúno 
         .catch(error => console.error('Error al cargar los datos de barra: ', error));
 };
  document.addEventListener('DOMContentLoaded', barras ());
