var datosHabilidades = {
    labels: ['Programación', 'Diseño', 'Comunicación', 'Resolución de Problemas', 'Colaboración', 'Creatividad'],
    datasets: [{
      label: 'Habilidades Técnicas',
      data: [80, 70, 85, 90, 75, 85],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  var opciones = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  var ctx7 = document.getElementById('radial').getContext('2d');
  var radial = new Chart(ctx7, {
    type: 'radar',
    data: datosHabilidades,
    options: opciones
  });
