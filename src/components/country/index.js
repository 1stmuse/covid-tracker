import React,{useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom'
import  Charts from './chart/index'
import MapContainer from '../countryInfo/map'

import './count.css'

const Country = (props) => {
    const [load, setLoad] = useState(true)
    const [count, setCount] = useState([])
    const data = props.history.location.pathname.split('/')[2]
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(()=>{
        fetch(`https://corona.lmao.ninja/v2/countries/${data}?yesterday&strict&query`, requestOptions)
        .then(res=> res.json())
        .then(data=>{
            setCount(prev=>[...prev, data])
            setLoad(false)
        })
    },[])

    return (
        <div>
            {
                load && !count.length ? 
                    <div class="loadingio-spinner-ripple-vd60cwl09kl">
                        <div class="ldio-9mvq2pbmqli">
                            <div>
                                </div>
                                <div>

                            </div>
                        </div>
                    </div>
                : 
                <div>
                    <div className='info-map'>
                        <MapContainer  lat={count[0].countryInfo.lat} lng={count[0].countryInfo.long} countryName={count[0].country} />
                    </div>
                    <div className='chart'>
                        <Charts data={{death:count[0].deaths, cases:count[0].cases, recovered:count[0].recovered}} country={count[0].country}/>
                    </div>

                    <div>
                        <h1>{count[0].country} </h1>
                        <h1>Population: {count[0].population} </h1>
                    </div>
                    <hr/>

                    <div>
                        <div>
                            <div>
                                <h1>Today's Stats</h1>
                            </div>
                            <h3>Cases: {count[0].todayCases}  </h3>
                            <h3>Deaths: {count[0].todayDeaths} </h3>
                            <h3>Recovered {count[0].todayRecovered} </h3>
                        </div>
                        <hr/>
                        <div>
                            <div>
                                <h1>Total Stats</h1>
                            </div>
                            <h3>Cases: {count[0].cases} </h3>
                            <h3>Deaths: {count[0].deaths} </h3>
                            <h3>Recovered: {count[0].recovered} </h3>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default withRouter(Country);