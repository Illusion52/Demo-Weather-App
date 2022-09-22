
// Weather//

let weather = {
    "apiKey": 'a69703114b305326392c0e54147fb040',
    fetchWeather: function(city) {
         fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey
         ).then((response) => response.json())
         .then((data) => this.displayWeather(data))


    },
    displayWeather: function(data) {
        const {name} = data
        const {icon} =data.weather[0]
        const {temp} = data.main
        const {description} = data.weather[0]
        const {humidity} = data.main
        const {speed} = data.wind

        document.querySelector('.city').innerHTML = 'Weather in ' + name;
        document.querySelector('.temp').innerHTML = temp + '°C';
        document.querySelector('.icon').src = 'http://openweathermap.org/img/wn/'+ icon +'.png' 
        document.querySelector('.description').innerHTML = description
        document.querySelector('.humidity').innerHTML = 'Humidity:' + humidity + '%'
        document.querySelector('.wind').innerHTML = 'Wind Speed' + speed + 'km/h'
        
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value)
    } 


}


document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        weather.search()
    }
})

document.querySelector('.search button').addEventListener('click', function() {
    weather.search()
})

//Theme//

//Selectors//
const inputBar = document.querySelector('.search-bar')
const searchButton = document.querySelector('.search button')
const appContainer = document.querySelector('.container')
const themeButton = document.querySelector('.theme-button')
const moonlitButton = document.querySelector('.Moonlit-Asteroid')
const expressoButton = document.querySelector('.eXpresso')
const argonButton = document.querySelector('.Argon')
const vineButton = document.querySelector('.Vine')
const themeContainer = document.querySelector('.theme-container')

//Events//

themeButton.addEventListener('click', function () {
    if(themeContainer.style.display = 'none') {
        themeContainer.style.display = 'flex'
    }     

})

moonlitButton.addEventListener('click', function() {
    appContainer.style.background = "linear-gradient( to right, #0F2027, #203A43, #2C5364)"
    inputBar.style.backgroundColor = '#69767aa8'
    searchButton.style.backgroundColor = '#69767aa8'
    themeButton.style.backgroundColor = '#69767aa8' 
    themeContainer.style.display = 'none'
})

expressoButton.addEventListener('click', function() {
    appContainer.style.background = "linear-gradient( to right, #ad5389, #3c1053)"
    inputBar.style.backgroundColor = '#cfa0bdc4'
    searchButton.style.backgroundColor = '#cfa0bdc4'
    themeButton.style.backgroundColor = '#cfa0bdc4'
    themeContainer.style.display = 'none'
})


argonButton.addEventListener('click', function() {
    appContainer.style.background = "linear-gradient( to right, #03001e, #7303c0, #ec38bc, #fdeff9)"
    inputBar.style.backgroundColor = 'rgb(155 111 138 / 77%)'
    searchButton.style.backgroundColor = 'rgb(155 111 138 / 77%)'
    themeButton.style.backgroundColor = 'rgb(155 111 138 / 77%)'
    themeContainer.style.display = 'none'
})

vineButton.addEventListener('click', function() {
    appContainer.style.background = "linear-gradient( to right, #870000, #190A05)"
    inputBar.style.backgroundColor = 'rgb(201 112 112 / 77%)'
    searchButton.style.backgroundColor = 'rgb(201 112 112 / 77%)'
    themeButton.style.backgroundColor = 'rgb(201 112 112 / 77%)'
    themeContainer.style.display = 'none'
})
