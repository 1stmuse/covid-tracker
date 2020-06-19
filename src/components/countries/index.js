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
        if(grid.length && !load){
            return grid[0].map((grid, index)=>(
                <div key={index} className='grid-item' >
                    <h1>{grid.country} </h1>
                    <h3>{grid.deaths} </h3>
                    <h3>{grid.cases} </h3>
                    <p>{grid.active} </p>
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