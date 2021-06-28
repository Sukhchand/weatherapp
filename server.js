const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const API_KEY = "0eea2645d7a6876fd8188e6b8f0f11f4";

app.get("/forecasts/:locationname",(req,res) => {
  const locationname = req.params.locationname;
  console.log(locationname);
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${locationname}&appid=${API_KEY}`;
  fetch(url)
    .then(response=>{return response.json()})
    .then(data=>{
      res.setHeader('Access-Control-Allow-Origin','*');
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    })

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
