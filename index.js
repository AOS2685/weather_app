console.log("Hello Ji Kaise ho sare.")
// We used async function and fetch Api in order to call an api
// json stands for Javascript Object Notation 
const API_KEY= "77d7abee846dac0c27fbd5da2f1f8092";

// async function showWeather(){
    // let lat=15.3;
    // let long=83.9;
    // let city="goa";
    // First we call it with the help of API and JSON.
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`);

    // const data = await response.json();
    // console.log("Weather data-> ", data);

    // let newPara = document.createElement('p');
    // newPara.textContent = `${data?.main?.temp.toFixed(2)} K`
    // newPara.textContent = `data. `
    // document.body.appendChild(newPara);
// }

// Let's handle the error using error & catch Block
async function fetchWeatherDetails(){
    try{
        let city="goa";   
    // First we call it with the help of API and JSON.
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`);
    const data = await response.json();
    console.log("Weather data-> ", data);
    renderWeatherInfo(data)
    }
    catch(err){
        // handle error
        print("Error found",err);
    }
    
}

async function getCustomWeatherDetails(){
    let lat=15.333;
    let long=18.333;
    let  result= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);
    let data= await result.json()
    console.log(data)
}

function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
      else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
      }
  
      // console.log("Current Tab", currentTab);
    }
  }
  
  function getLocation() {
      if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      }
      else {
          console.log("No geoLocation Support");
      }
  }
  
  function showPosition(position) {
      let lat = position.coords.latitude;
      let longi = position.coords.longitude;
  
      console.log(lat);
      console.log(longi);
  }