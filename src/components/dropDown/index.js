import React, {useState, useEffect} from 'react';
import './drop.css'

const DropDown = (props) => {
    const [count, setCount] =useState([])
    const change = (e)=>{
        console.log(e.target.value)
    }

   useEffect(()=>{
    fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    .then(res=>res.json())
    .then(data=>{
        setCount(prev=> [...prev, ...data])
    })
   },[])
    return (
        <div className='drop'>
            
            <select onChange={change} >
                <option>select a country</option>
                {count.map((count, i)=>(
                    <option value={count.country} key={i} >{count.country} </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;