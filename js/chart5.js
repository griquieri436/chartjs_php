var datosTemperaturas = {
  label: "Temperaturas Diarias",
  data: [25, 27, 29, 22, 20, 18, 22, 25, 28, 30, 28, 26],
  type: "line", // Tipo de gráfico de línea
  borderColor: "rgba(255, 99, 132, 1)",
  backgroundColor: "rgba(255, 99, 132, 0.2)",
  yAxisID: "y-temperaturas", // Identificador del eje y para las temperaturas
};

var datosPrecipitaciones = {
  label: "Precipitaciones Diarias",
  data: [5, 8, 2, 0, 15, 10, 0, 3, 6, 12, 8, 4],
  type: "bar", // Tipo de gráfico de barras
  backgroundColor: "rgba(54, 162, 235, 0.6)",
  yAxisID: "y-precipitaciones", // Identificador del eje y para las precipitaciones
};

var meses = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  datasets: [datosTemperaturas, datosPrecipitaciones],
};

var opciones = {
  scales: {
    yAxes: [
      {
        id: "y-temperaturas",
        type: "linear",
        position: "left",
      },
      {
        id: "y-precipitaciones",
        type: "linear",
        position: "right",
      },
    ],
  },
};

var ctx5 = document.getElementById("mixed").getContext("2d");
var mixed = new Chart(ctx5, {
  type: "bar",
  data: meses,
  options: opciones,
});
