// 0c2c6c3ce8986fefaf4303276286d0c2
// lat 39.290386
// long -76.612190
var requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.290386&lon=-76.612190&appid=0c2c6c3ce8986fefaf4303276286d0c2&units=imperial';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });