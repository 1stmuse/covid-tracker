import React from 'react' ;
import {Line, Bar} from 'react-chartjs-2' ;

const Charts = ({data, country}) => {

    const barChart = (
        <Bar 
            data = {{
                labels: ['Cases', 'Deaths', 'Recovered'],
                datasets: [{
                    label: ['Cases', 'Deaths', 'Recovered'],
                    backgroundColor: [
                        'rgba(0, 0, 255, .5)',
                        'rgba(0, 255, 0, .5)',
                        'rgba(255, 0, 0, .5)',
                    ],
                    data: [data.cases, data.death, data.recovered]
                }]
            }}
            options = {{
                legend: {display: false},
                title: {display: true, text: `Current state in ${country}`}
            }}
        />
    )

    return (
        <div className = "charts">
            {barChart}
        </div>
    )
}

export default Charts