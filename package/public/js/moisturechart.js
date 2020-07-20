var ctxMoisture = document.getElementById('moisChart').getContext('2d')
var dataMoisture = {
  labels: [0],
  datasets: [{
    data: [0],
    label: 'Soil Moisture Level',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderColor: 'rgba(255,99,132,1)'
  }]
}


var chartMoisture = new Chart(ctxMoisture, {
  type: 'bar',
  data: dataMoisture,
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
            //max: 100
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

ctxMoisture.height = 200;

let alert_already_sent = false;
let thanks_already_sent = false;

socket.on('moistureLevel', function (moistureLevel) {
  
  const alertMatch = () => {
    console.log('Alert Match!');
    alert_already_sent = true;
    $('body').addClass('needwater')
  }
  const thanksMatch = () => {
    console.log('Thanks for the water!');
    thanks_already_sent = true;
    $('body').removeClass('needwater')
    alert_already_sent = false;

    $('body').addClass('thankswater')
    setTimeout(() => {
      $('body').removeClass('thankswater')
    }, 8000);
  }

  if (moistureLevel <= 30 && alert_already_sent == false) {
    alertMatch();
    
    
  } else if (moistureLevel >= 30 && thanks_already_sent == false && alert_already_sent == true) {
    thanksMatch();
    
  } else if (moistureLevel >= 30 && thanks_already_sent == true) {
    thanks_already_sent = false;
  }
});