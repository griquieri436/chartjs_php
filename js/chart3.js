var Ingresos = {
  label: "Ingresos", //nombre de los datos a comprarar
  data: [
    12000, 15500, 18200, 20000, 22500, 25000, 28000, 35000, 30500, 28000, 26500,
  ], // valores de los datos

  //Estilos de lineas
  backgroundColor: "rgba(18,141,51,0.4)",
  borderColor: "rgba(18,141,51,1)",
  borderwith: 1,
};

var Egresos = {
  label: "Egresos", //nombre de los datos a comprarar
  data: [
    5000, 6500, 8000, 9500, 7000, 8500, 10000, 12000, 13500, 11000, 10500, 9000,
  ], // valores de los datos

  //Estilos de lineas
  backgroundColor: "rgba(255,25,27,0.4)", //color de fondo
  borderColor: "rgba(255,25,27,1)", //color de linea
  borderwith: 1, //ancho de linea
};

var Resultados = {
  label: "Resultados",
  data: [],

  backgroundColor: "rgba(0,0,255,0.4)",
  borderColor: "rgba(0,0,255,1)",
  borderWidth: 1,
};

//Se utiliza el for por cada uno de los meses para verificar los resultados de cada mes
for (var i = 0; i < Ingresos.data.length; i++) {
  Resultados.data.push(Ingresos.data[i] - Egresos.data[i]);
}

var meses = {
  labels: [
    "Enero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ], //referencias a comparar
  datasets: [Ingresos, Egresos, Resultados], //Datos a comparar
};

//se pueden agregar como variables o directamente en la parte del gráfico
var options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  }
};



function lines() {
  fetch("php/getDataChart3.php")
    .then((response) => response.json())
    .then((data3) => {
      console.log(data3);

      var options = {
        // Opciones de configuración (puedes ajustar según tus necesidades)
      };

      const ctx3 = document.getElementById("linea");
      const linea = new Chart(ctx3, {
        type: "line",
        data: meses,
        options: options,
      });
      
    });
}

document.addEventListener("DOMContentLoaded", lines());