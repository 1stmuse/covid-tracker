
import React, {useState, useEffect} from 'react';
import ResponsiveDrawer from './components/Layout.js'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'


function App() {
  const [coun , setCount] =useState([])
  const [load, setLoad]= useState(false)
  const [lat, setLat]=useState(0)
  const [lng, setLng]=useState(0)
  const [countName, setCountName]=useState('')
  // const [country, setCountry] =useState([])
  const ital ='Italy'
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  // const pos =(position)=>{
  //   console.log('position',position)
  //     fetch('http://api.geonames.org/countryCode', {
  //       lat : position.coords.latitude,
  //       lng : position.coords.longitude,
  //       type : 'JSON',
  //       username : 'demo'
  //   }, function(result) {
  //       alert(result.countryName);
  //     });
  // }
  // const err= (error)=>{
  //   alert(error)
  // }
  // https://corona.lmao.ninja/v2/countries/Italy?yesterday&strict&query
  useEffect(()=>{
   fetch('http://ip-api.com/json/')
    .then(res=> res.json())
    .then(data=>{
       fetch(`https://corona.lmao.ninja/v2/countries/${data.country}?yesterday&strict&query`)
       .then(res=>res.json())
       .then(result=>{
        setCount(pre=> [...pre, result])
        setCountName(result.country)
        setLat(result.countryInfo.lat)
        setLng(result.countryInfo.long)
        setLoad(true)
         console.log(result)
       })
       console.log(data)
      }
    )





  // fetch("https://api.covid19api.com/summary", requestOptions)
  // .then(response => response.json())
  // .then(result => {
  //   setCount(pre=> [...pre, result.Global])
  //   setLoad(true)
  // })
  // .catch(error => console.log('error', error));

  }, [])

  // console.log('count from app',coun[0].NewDeaths)
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
        <footer className='footer'>
          <p style={{textAlign:'center', zIndex:1220}}>created by muse </p>
        </footer>
      </Router>
    </div>
  );
}

export default App;