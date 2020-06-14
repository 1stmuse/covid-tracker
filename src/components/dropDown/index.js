import React from 'react';
import './drop.css'

const DropDown = (props) => {
    const change = (e)=>{
        console.log(e.target.value)
    }
    return (
        <div className='drop'>
            
            <select onChange={change} >
                <option>select a country</option>
                {props.countries.map((country, i)=>(
                    <option value={country} key={i} >{country} </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;