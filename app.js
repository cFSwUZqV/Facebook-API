//EXPRESS
const express  = require('express')
const app = express();
app.get('/', (req, res) =>{
   res.send('Basic HTML page testing....'); 
});
//ALPHAVANTAGE API
var AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;
var dailyDataOne;
var yourApiKey = 'YT0QE9BTH41GUH7E';
var alphaVantageAPI = new AlphaVantageAPI(yourApiKey, true);

alphaVantageAPI.getDailyData('FB')
    .then(dailyData => {
        console.log("Daily data:");
        console.log(dailyData);
    dailyDataOne = dailyData;
    })
    .catch(err => {
        console.error(err);
    });

//POST
app.get('/FBStock', (req,res) => {
    res.send(dailyDataOne);
})

//OPEN TO LOCALHOST
app.listen(8080, () => {
    console.log('Listening on port 8080.')
});