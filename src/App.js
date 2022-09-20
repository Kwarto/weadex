import React from 'react';
import { useState } from 'react';
import  fetchWeather  from './components/api/fetchWeather/fetchWeather'
import {BsLinkedin, BsFacebook, BsGithub} from 'react-icons/bs'
import './index.css'


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = async(e) => {
    if(e.key === 'Enter'){
      const data = await fetchWeather(query);
      
      setWeather(data);
      setQuery('')
    }
  }
  
  return (
     <>
     <nav>
       <a href='https://facebook.com/webalien'><BsFacebook className='nav-ico'/></a>
       <a href='https://www.linkedin.com/in/joseph-kwarteng-992337243/'><BsLinkedin className='nav-ico'/></a>
       <a href='https://github.com/Kwarto'><BsGithub className='nav-ico'/></a>
     </nav>
     <div className='title'>
      <h1>WEA<span>DEX</span>
       <sup>&deg;C</sup>
      </h1>
     </div>
      <div className='container'>
        <input type='text'className='Search' placeholder='Search Place Weather...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
      
        {weather.main && (
           <div className='city'>
             <h2 className='city-name'>
              <span>{weather.name}</span>
              <sup>{weather.sys.country}</sup>
             </h2>

             <div className='city-temp'>
               {Math.round(weather.main.temp)}
               <sup>&deg;C</sup>
             </div>

             <div className='info'>
                <img className='city-ico' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
               <p>{weather.weather[0].description}</p>
             </div>
           </div>
        )}
      </div>
      <footer>
        <p>&copy; 2022 | All Copyrights Reserved</p>
      </footer>
     </>
  );
}

export default App;
