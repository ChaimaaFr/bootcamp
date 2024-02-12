const fs = require("fs");


const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 },
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

function selectRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex];
}

let city_name = selectRandomCity(cities).name;

const city_json = JSON.stringify(cities);

//write file

fs.writeFile('input.txt', city_json, (err) => {
    if (err) {
        console.error('Error creating file:', err);
    } else {
        
    }
});

//read file

fs.readFile('input.txt', 'utf8', async (err, res) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        const data = JSON.parse(res);
        const city = data.find(city => city.name === city_name);
        console.log('city :', city.name);
        await weather(city);
    }
});
 //retrieve
async function weather(city) {
     const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`);
    const weatherData = await response.json();
   
    console.log("Weather :", weatherData.current_weather);
}

//delete
fs.unlink(`${city_name}.txt`, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully.');
    }
});



// file creation

function createFile(city, temp) {

        fs.writeFileSync(`${city}.txt`, `Temperature: ${temp}`);
        console.log('File created successfully.');
    
}

//  temperature() that return the temperature 
async function temperature(city) {
    
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current_weather=true`);
        const weatherData = await response.json();
        return weatherData.current_weather.temperature; // Return the temperature
    
}

    
async function test() {
   
        const city = selectRandomCity(cities); 
        const temp = await temperature(city); // Fetch the temperature for the selected city
        createFile(city.name, temp); // Create a file with the city name and temperature
   
}

test();
