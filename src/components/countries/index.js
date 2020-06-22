import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import './grid.css'

const Countries =(props) =>{
    const data = props.history.location.pathname.split('/')[2]
    console.log(data)
    const [dep, setDep]=useState([])
    const [load, setLoad]=useState(true)
    const [grid, setGrid] = useState([])

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

  
  useEffect(()=>{
    fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort", requestOptions)
        .then(res=> res.json())
        .then(data=>{
            setGrid((pre)=>[...pre, data])
            setLoad(false)
            console.log(data)
        })
  }, [dep])

    const showGrid=()=>{
        if(grid.length && !load && data =='Today'){
            return grid[0].map((grid, index)=>(
                <div key={index} className='grid-item' >
                    <h1>{grid.country} </h1>
                    <h2>{data} </h2>
                    <h3>Cases: {grid.todayCases} </h3>
                    <h3>Deaths: {grid.todayDeaths} </h3>
                    <h3>Recovered: {grid.todayRecovered} </h3>
                </div>
            ))
        }else{
            return grid[0].map((grid, index)=>(
                <div key={index} className='grid-item' >
                    <h1>{grid.country} </h1>
                    <h2>{data} </h2>
                    <h3>Cases: {grid.cases} </h3>
                    <h3>Deaths: {grid.deaths} </h3>
                    <h3>Recovered: {grid.active} </h3>
                </div>
            ))
        }
    }

    return(
        <div>
            <div className='grid'>
                {/* {showGrid()} */}
                {load? <div>Loading</div> : (
                    showGrid()
                ) }
            </div>
        </div>
    )
}

export default withRouter(Countries)