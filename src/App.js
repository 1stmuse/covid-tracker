
import React, {useState, useEffect} from 'react';
import ResponsiveDrawer from './components/Layout.js'
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
    // setCount(pre=> [...pre, result])
    console.log(result)
  })
  .catch(error => console.log('error', error));
  }, num)
  return (
    <div>
      <ResponsiveDrawer hoo={coun} />
    </div>
  );
}

export default App;