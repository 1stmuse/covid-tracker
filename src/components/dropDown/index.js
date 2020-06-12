import React from 'react';

const DropDown = (props) => {
    const change = (e)=>{
        console.log(e.target.value)
    }
    return (
        <div>
            <select onChange={change} >
                {props.countries.map((country, i)=>(
                    <option value={country} key={i} >{country} </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;