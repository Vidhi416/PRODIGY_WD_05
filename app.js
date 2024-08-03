const container=document.querySelector(".container");
const search=document.querySelector(".searchbar .search");
const weatherbox=document.querySelector(".weatherbox");
const weatherdetails=document.querySelector(".weatherdetails");
const city=document.querySelector(".searchbar input").value;
const error=document.querySelector(".notfound");
console.log(city);
  

search.addEventListener("click",()=>{
    const apikey="71253ebf05dc5ca9910959a2eb99e46b";
    const city=document.querySelector(".searchbar input").value;


    if(city=="")
    {
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`).then(response=>response.json()).then(json=>{

      if(json.cod=='404'){
        weatherbox.classList.remove("active");
        weatherdetails.classList.remove("active");
        error.classList.add("active");
      }
      weatherbox.classList.add("active");
        weatherdetails.classList.add("active");
        error.classList.remove("active");
      
      
        const image=document.querySelector(".weather img");
      const temperature=document.querySelector(".weather .temperature");
      const description=document.querySelector(".weather .description");
      const humidity=document.querySelector(".weatherdetails .humidity .quantity");
      const wind=document.querySelector(".weatherdetails .wind .quantity");
            
     switch(json.weather[0].main){
        case 'Clear':
            image.src='sun.png';
            break;
        case 'Rain':
            image.src='storm.png';
            break;
        case 'Clouds':
                image.src='cloudy.png';
            break;
            case 'Snow':
            image.src='snow.png';
            break;
            case 'Mist':
            image.src='mist.png';
            break;   
           case 'Haze':
            image.src="mist.png";
            break;


        default:
            image.src='sun.png';
            break;
     }
     temperature.innerHTML=`${parseInt(json.main.temp)}&deg C`;
     description.innerHTML=`${json.weather[0].description}`;
     humidity.innerHTML=`${json.main.humidity}%`;
     wind.innerHTML=`${parseInt(json.wind.speed)}Km/hr`;

    });
});
