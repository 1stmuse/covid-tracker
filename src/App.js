
import React, {useState, useEffect} from 'react';
import ResponsiveDrawer from './components/Layout.js'
import MapContainer from './components/countryInfo/map'
import './App.css'


function App() {
  const [coun , setCount] =useState([])
  const [num, setNum]= useState([])
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(()=>{
  fetch("https://api.covid19api.com/summary", requestOptions)
  .then(response => response.json())
  .then(result => {
    setCount(pre=> [...pre, result.Global])
    console.log(result.Global)
  })
  .catch(error => console.log('error', error));
  }, num)
  return (
    <div>
      <ResponsiveDrawer summary={coun} />
      <footer className='footer'>
        <p style={{textAlign:'center', zIndex:1220}}>created by muse </p>
      </footer>
      {/* <MapContainer/> */}
    </div>
  );
}

export default App;