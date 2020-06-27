
import React, {useState, useEffect, useContext} from 'react';
import ResponsiveDrawer from './components/Layout.js'
import {BrowserRouter as Router} from 'react-router-dom'
import {contextProv} from './components/Contex'
import './App.css'

function App() {
  const [coun , setCount] =useState([])
  const [load, setLoad]= useState(false)
  const [lat, setLat]=useState(0)
  const [lng, setLng]=useState(0)
  const [countName, setCountName]=useState('')
  const {lightMode, bright, darkMode} = useContext(contextProv)
  const mode = bright ? lightMode.backgroundColor : darkMode.backgroundColor
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(()=>{
   fetch('https://freegeoip.app/json/')
    .then(res=> res.json())
    .then(data=>{
       fetch(`https://corona.lmao.ninja/v2/countries/${data.country_name}?yesterday&strict&query`, requestOptions)
       .then(res=>res.json())
       .then(result=>{
        setCount(pre=> [...pre, result])
        setCountName(result.country)
        setLat(result.countryInfo.lat)
        setLng(result.countryInfo.long)
        setLoad(true)
       })
      }
    )

  }, [])

  return (
    <div>
      <Router path='/' exact>
        <ResponsiveDrawer 
          summary={coun.length ? coun:null} 
          load={load}   
          countryName={countName}
          lat={lat}
          lng={lng}
        />
        <footer className='footer' style={{backgroundColor:mode}} >
          <p style={{textAlign:'center', zIndex:1220}}>created by muse </p>
        </footer>
      </Router>
    </div>
  );
}

export default App;