var datosActividades = {
    labels: ['Mañana', 'Mediodía', 'Tarde', 'Noche'],
    datasets: [
      {
        label: 'Trabajo',
        data: [2],
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Descanso',
        data: [1, 2, 1, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Ejercicio',
        data: [0, 1, 2, 1],
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  var opciones = {
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    },
    responsive: true
  };

  var ctx6 = document.getElementById('polar').getContext('2d');
  var polar = new Chart(ctx6, {
    type: 'polarArea',
    data: datosActividades,
    options: opciones
  });