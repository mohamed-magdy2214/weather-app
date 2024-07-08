let toggle = document.querySelector(`.toggle-icon`);


toggle.addEventListener(`click`, function(){
    let links = document.querySelector(`header .container .links`);
    links.classList.add(`d-block`);
})


let dayName = ``;
let nextDay = ``;
let lastDay = ``;
let finalRes = {};
let forecast = [];

async function showingWeather(country) {

    let res =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=905326ba3b2b44b186e115810230708&q=${country}&days=7`);

    finalRes =await res.json();
    forecast = finalRes.forecast.forecastday;

    let d = new Date(`${forecast[0].date}`);
    let d1 = new Date(`${forecast[1].date}`);
    let d2 = new Date(`${forecast[2].date}`);

    dayName = d.toString().split(' ')[0];
    nextDay = d1.toString().split(' ')[0];
    lastDay = d2.toString().split(' ')[0];
    
    displayWeather()

}

showingWeather(`lond`)


var cartona = ``;

function displayWeather() {
    cartona = `<div class="today forecast">
    <div class="header">
    <div class="day">${dayName}</div>
    <div class="date">${forecast[0].date}</div>
</div>
<div class="forecast-content">
    <div class="location">${finalRes.location.name}</div>
    <div class="degree">
        <div class="num">
            ${forecast[0].day.maxtemp_c}<sup>o</sup>C</div>
        <div class="forecast-icon">
            <img src="https:${forecast[0].day.condition.icon}" alt="temp icon">
        </div>
    </div>
    <div class="status">${forecast[0].day.condition.text}</div>
    <span>
        <img src="images/icon-umberella@2x.png" alt="">
        20%
    </span>
    <span>
        <img src="images/icon-compass@2x.png" alt="">
        ${forecast[0].day.maxwind_mph}
    </span>
    <span>
        <img src="images/icon-wind@2x.png" alt="">
        East
    </span>
</div></div>
<div class="tomorrow forecast">
                    <div class="header">
                        <div class="day text-center">${nextDay}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="degree">
                            <div class="forecast-icon">
                                <img src="https:${forecast[1].day.condition.icon}" alt="temp icon">
                            </div>
                            <div class="num">${forecast[1].day.maxtemp_c}<sup>o</sup>C</div>
                            <span>${forecast[1].day.mintemp_c}<sup>o</sup></span>
                        </div>
                        <div class="status">${forecast[1].day.condition.text}</div>
                    </div>
                </div>
                <div class="last forecast">
                    <div class="header">
                        <div class="day text-center">${lastDay}</div>
                    </div>
                    <div class="forecast-content">
                        <div class="degree">
                            <div class="forecast-icon">
                                <img src="https:${forecast[2].day.condition.icon}" alt="temp icon">
                            </div>
                            <div class="num">${forecast[2].day.maxtemp_c}<sup>o</sup>c</div>
                            <span>${forecast[2].day.mintemp_c}<sup>o</sup></span>
                        </div>
                        <div class="status">${forecast[1].day.condition.text}</div>
                    </div>
                </div>`

document.querySelector(`#weather`).innerHTML = cartona;

}


let search = document.getElementById(`search`);
search.addEventListener(`input`,function(e){
    showingWeather(this.value);

})




