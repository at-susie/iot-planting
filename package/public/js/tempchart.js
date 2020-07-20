var ctxTemp = document.getElementById('tempChart').getContext('2d')
var dataTemp = {
  labels: [0],
  datasets: [{
    data: [0],
    label: 'Temperature',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(255,99,132,1)'
  }]
}


var chartTemp = new Chart(ctxTemp, {
  type: 'bar',
  data: dataTemp,
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
            //max: 40
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