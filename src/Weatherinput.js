import React, {Fragment, useState} from 'react';

function WeatherInput() {
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState({});

  const submitLocation = (event) =>{
    event.preventDefault();
    fetch(`http://localhost:5000/forecasts/${location}`)
      .then(results=>results.json())
      .then(data=>{
        setLocationData(data);
      })
  }
  return (
    <Fragment>
      <div className="main-content">
        <div >
          <span className="input-label">Enter zipcode below to get the current weather conditions for that area.</span>
          <form onSubmit={submitLocation}>
            <input type="text" onChange={e => setLocation(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        </div>

        {Object.keys(locationData).length !== 0 && locationData.cod===200 && (<div className="location-details">
          <p><strong>Name:</strong> {locationData.name}</p>
          <p><strong>Weather:</strong> {locationData.weather[0].main}({locationData.weather[0].description})</p>
          <p><strong>Wind Speed:</strong> {locationData.wind.speed} m/s</p>
          <p><strong>Wind Direction:</strong> {locationData.wind.deg}</p>
          <p><strong>Longitude:</strong> {locationData.coord.lon}</p>
          <p><strong>Latitude:</strong> {locationData.coord.lat}</p>
        </div>)}
        {Object.keys(locationData).length !== 0 && locationData.cod!==200 && (<div className="no-result">
          <h3>{locationData.message}</h3>
        </div>)}
      </div>
    </Fragment>


  )
}

export default WeatherInput;
