import React, {useState, useEffect} from 'react';
import './drop.css'

const DropDown = (props) => {
    const [country, setCountry] =useState([])
    const change = (e)=>{
        console.log(e.target.value)
    }

   useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{
        setCountry(prev=> [...prev, ...data])
        // setLoad(true)
        console.log(data)
    })
   },[])
    return (
        <div className='drop'>
            
            <select onChange={change} >
                <option>select a country</option>
                {country.map((count, i)=>(
                    <option value={count.name} key={i} >{count.name} </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;