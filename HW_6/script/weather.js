let div = "";
function weatherBalloon( cityID ) {
    let key = "8643e5fa4d67cb1ad3c160e1d6c66d90";
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key + '&lang=ru&units=metric')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
    	div.innerHTML += '<span>' + data.name + '</span><br/><span>Температура'+data.main.temp+'C<sup>0</sup></span><br/><span>Погода'
    	+data.weather[0].description+'</span>'
      //console.log(data);
      return div;
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  /*window.onload = function() {
    weatherBalloon("Минск");
  }*/

  export {weatherBalloon};