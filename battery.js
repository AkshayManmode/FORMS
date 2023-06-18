function addToObject(){
    var BATRF = document.getElementById("batrfid").value;
    var LIVESATE = document.getElementById("liveState").value;
    var VOLT = document.getElementById("volt").value;
    var CURRENT = document.getElementById("current").value;
    var TEMPRATURE = document.getElementById("temprature").value;
    var LAT = document.getElementById("latitude").value;
    var LOG = document.getElementById("longitude").value;

  console.log(BATRF,"------------------------------");
  console.log(LIVESATE,"------------------------------");




var finalString = BATRF+'_'+LIVESATE+'_'+VOLT+'_'+CURRENT+'_'+TEMPRATURE+'_'+LAT+'_'+LOG

console.log("",finalString)

fetch('http://192.168.1.248:8080/api/battery/push/'+finalString , {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)


    }).catch(error => console.error('Error:', error));

  location.href="sant.html";
  }





