const apiKey = "119c066f3d83f61b14c046667cbd7788";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const cuacaBackground = document.querySelector(".cuaca-background") 

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  

  if(response.status == 404) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
    // document.querySelector(".cuaca-background").style.display = "none"

    alert("nama kota tidak ada")
  }else{var data = await response.json();
  

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  
    console.log(data);
    
  
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/clouds.png"
      // cuacaBackground.src ="https://i.pinimg.com/originals/cb/56/94/cb56941995519d440681df85be384a97.gif"
    } 
    else if(data.weather[0].main == "Clear"){ 
      weatherIcon.src = "img/clear.png"
      // cuacaBackground.src = "https://gifdb.com/images/high/aesthetic-anime-sun-927m6tq2qlfkk3x6.webp"
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "img/rain.png"
      // cuacaBackground.src = "https://i.pinimg.com/originals/ae/3c/a4/ae3ca412d7468e44385bb2eb0fdc3d6e.gif"   
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "img/drizzle.png"
      // cuacaBackground.src = "https://gifdb.com/images/high/clouds-pouring-rain-natural-weather-0mojk2g1zaw7ol8v.webp" 
    }
  
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "img/mist.png"
      // cuacaBackground.src = "https://i.gifer.com/IJNb.mp4"
    }

      document.querySelector(".error").style .display = "none"
      document.querySelector(".weather").style.display = "block"
      // document.querySelector(".cuaca-background").style.display = "block"
    }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})