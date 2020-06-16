
import React, {useState, useEffect} from 'react';
import ResponsiveDrawer from './components/Layout.js'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'


function App() {
  const [coun , setCount] =useState([])
  const [load, setLoad]= useState(false)
  // const [country, setCountry] =useState([])
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(()=>{
  fetch("https://api.covid19api.com/summary", requestOptions)
  .then(response => response.json())
  .then(result => {
    setCount(pre=> [...pre, result.Global])
    setLoad(true)
    // console.log(result.Global)
    // console.log('count from app',coun[0]['NewDeaths'])
  })
  .catch(error => console.log('error', error));


  // fetch('https://restcountries.eu/rest/v2/all')
  // .then(res=>res.json())
  // .then(data=>{
  //     setCountry(prev=> [...prev,data])
  //     setLoad(true)
  //     console.log(data)
  // })

  }, [])

  // console.log('count from app',coun[0].NewDeaths)
  return (
    <div>
      <Router path='/' exact>
        <ResponsiveDrawer summary={coun.length ? coun:null} load={load}   />
        <footer className='footer'>
          <p style={{textAlign:'center', zIndex:1220}}>created by muse </p>
        </footer>
      </Router>
      {/* <ResponsiveDrawer summary={coun.length ? coun:null} load={load} />
      <footer className='footer'>
        <p style={{textAlign:'center', zIndex:1220}}>created by muse </p>
      </footer> */}
    </div>
  );
}

export default App;