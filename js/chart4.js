// var Precio = {
//   label: "Precio",
//   data: [10, 20, 30, 40, 50],
//   backgroundColor: "rgba(18,141,51,0.4)",
//   borderColor: "rgba(18,141,51,1)",
//   borderwith: 1,
// };

// var Ventas = {
//   label: "Ventas",
//   data: [50, 30, 15, 40, 20],

//   //Estilos de lineas
//   backgroundColor: "rgba(255,25,27,0.4)", //color de fondo
//   borderColor: "rgba(255,25,27,1)", //color de linea
//   borderwith: 1, //ancho de linea
// };

// var Ganancias = {
//   label: "Ganancias",
//   data: [250, 300, 400, 600, 200],

//   backgroundColor: "rgba(0,0,255,0.4)",
//   borderColor: "rgba(0,0,255,1)",
//   borderWidth: 1,
// };

// var Producto = {
//   label: "Productos",
//   data: ["Producto A", "Producto B", "Producto C", "Producto D", "Producto E"],
//   datasets: [Precio, Ventas, Ganancias],
// };
// var options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     }
//   };

var datosProductos = [
  { producto: "Producto A", precio: 10, cantidadVendida: 50, ganancia: 250 },
  { producto: "Producto B", precio: 15, cantidadVendida: 30, ganancia: 300 },
  { producto: "Producto C", precio: 20, cantidadVendida: 20, ganancia: 400 },
  { producto: "Producto D", precio: 25, cantidadVendida: 40, ganancia: 600 },
  { producto: "Producto E", precio: 30, cantidadVendida: 15, ganancia: 200 },
];

var datosX = datosProductos.map((producto) => producto.precio);
var datosY = datosProductos.map((producto) => producto.ganancia);
var bubblessize = datosProductos.map(
  (producto) => producto.cantidadVendida
);
var ctx4 = document.getElementById("bubbles").getContext("2d");
var bubbles = new Chart(ctx4, {
  type: "bubble",
  data: {
    labels: datosProductos.map((producto) => producto.producto),
    datasets: [
      {
        label: "Productos",
        data: datosProductos.map((producto, index) => ({
          x: datosX[index],
          y: datosY[index],
          r: bubblessize[index],
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end",
        color: "black",
        formatter: function (value, context) {
          return context.dataset.data[context.dataIndex].label;
        },
      },
    },
  },
});
