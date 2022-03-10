var button = document.querySelector('#button')
var inputValue = document.querySelector('#inputValue')
var name = document.querySelector('#name');
var temp = document.querySelector('#temp');
var pais = document.querySelector('#pais');
var max = document.querySelector('#max');
var min = document.querySelector('#min');

button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=fa6bd2aed33461df25fd27efd6debe7d&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var paisValue = data['sys']['country'];
        var tempValue = data['main']['temp'];
        var maxValue = data['main']['temp_max'];
        var minValue = data['main']['temp_min']; 

        document.querySelector('#pais').value = paisValue;
        document.querySelector('#temp').value = tempValue + "°";
        document.querySelector('#max').value = maxValue + "°";
        document.querySelector('#min').value = minValue + "°";

    })
    .catch(err => alert("Cidade não encontrada."))
})


