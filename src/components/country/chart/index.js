import React  from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend,
} from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 }, { name: 'Group B', value: 300, text:'helo' },
//   { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
// ];

 const Chart =(props)=>  {

	// const data = [
	// 	{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
	// 	{ name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
	// ];

    return (
      <div style={{ width: '100%', height: 300, backgroundColor:'white' }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={props.data} fill="#8884d8" label Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
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
