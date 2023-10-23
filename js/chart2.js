 
 
 function barras() {

  // Cargar los datos desde data.json- los toma desde el html
  fetch('php/getDataChart2.php')
      .then(response => response.json())
      .then(data2 => {
          console.log (data2);

          // Crear el gráfico con los datos modificados
          const ctx2 = document.getElementById('barchart2');

          const barchart = new Chart(ctx2, {
              type: 'bar',
              data: data2,
              options: {
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
                        legend: {
                            position: 'right',
                          } 
                  }
              }
          });
      })
      //captura el error si es que existe algúno 
      .catch(error => console.error('Error al cargar los datos de barra: ', error));
};
document.addEventListener('DOMContentLoaded', barras ());
