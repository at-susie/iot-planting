var ctxLight = document.getElementById('lightChart').getContext('2d')
var dataLight = {
  labels: [0],
  datasets: [{
    data: [0],
    label: 'Light',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(255,99,132,1)'
  }]
}


var chartLight = new Chart(ctxLight, {
  type: 'bar',
  data: dataLight,
  options: {
    animation: {
      easing: 'easeInOutSine',
      duration: 500
    },
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            display: false
            //max: 1000
          },
          gridLines: {
            display: false,
            drawBorder: false,
          }
        }
      ]
    },
    tooltips: tooltip
  }
})