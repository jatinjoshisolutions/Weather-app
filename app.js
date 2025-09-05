const tempField = document.querySelector(".temp");
const locationField = document.querySelector(".location");
const dateField = document.querySelector(".date-time");
const weatherField = document.querySelector(".contion");
const searchField = document.querySelector(".bar");
const searchButton = document.querySelector(".button");
const form = document.querySelector("form");

form.addEventListener("submit", SearchForLoaction);  // updating traget value of loaction to value entered by user

let traget = "Mumbai";

// fetching output from the url(api)
const fetchResults = async () => {
    let url = `http://api.weatherapi.com/v1/current.json?key=9d8c5c90a37c4d738bb105736250509&q=${traget}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    // acceding the requied information that needed to be displayed on scrren from whole data recived from API
    let loactionName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition1 = data.current.condition.text;

// printing the above value in console -(not need) 
    console.log(loactionName);
    console.log(time);
    console.log(temp);
    console.log(condition1);

    // Optional: update UI
    locationField.textContent = loactionName;
    dateField.textContent = time;
    tempField.textContent = temp + "°C";
    weatherField.textContent = condition1;
};

function SearchForLoaction(e) {
    e.preventDefault(); // stop form reload
    traget = searchField.value; // update global traget
    fetchResults(); 
}

fetchResults(); // initial call
