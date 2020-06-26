import React from 'react'
// import {Pie} from 'react-chartjs'

const chartData ={
	labels:['RED', 'BLUE', 'GREEN']
}

const Chart =()=>{

	

	return(
		<div>
			{/* <Pie data={chartData} redraw/> */}
		</div>
	)
}

export default Chart

// import React, {Component} from 'react'
// import CanvasJSReact from '../../canvasjs.react'
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class Chart extends Component {
// 	render() {
// 		const options = {
// 			exportEnabled: true,
// 			animationEnabled: true,
// 			title: {
// 				text: "Corona Cases"
// 			},
// 			data: [{
// 				type: "pie",
// 				startAngle: 75,
// 				toolTipContent: "{label}: {y}%",
// 				showInLegend: "true",
// 				legendText: "{label}",
// 				indexLabelFontSize: 16,
// 				indexLabel: "{label} - {y}%",
// 				dataPoints: [
// 					{ y: 18, label: "Direct" },
// 					{ y: 49, label: "Organic Search" },
// 					{ y: 9, label: "Paid Search" },
// 					{ y: 5, label: "Referral" },
// 					{ y: 19, label: "Social" }
// 				]
// 			}]
// 		}
// 		return (
//       <div>
//         <CanvasJSChart options = {options}/>
//       </div>
// 		);
// 	}
// }
// export default Chart
