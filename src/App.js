
import React, {useState, useEffect} from 'react';
import ResponsiveDrawer from './components/Layout.js'
import './App.css'


function App() {
  const [coun , setCount] =useState([])
  const [load, setLoad]= useState(false)
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
  }, [])

  // console.log('count from app',coun[0].NewDeaths)
  return (
    <div>
      <ResponsiveDrawer summary={coun.length ? coun:null} load={load} />
      <footer className='footer'>
        <p style={{textAlign:'center', zIndex:1220}}>created by muse </p>
      </footer>
    </div>
  );
}

export default App;