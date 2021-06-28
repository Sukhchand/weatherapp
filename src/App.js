import logo from './logo.svg';
import './App.css';
import WeatherInput from "./Weatherinput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Weather App</h3>
      </header>
      <WeatherInput/>
      <footer>
        <span> Created by Sukhchand Kisku</span>
      </footer>
    </div>
  );
}

export default App;
