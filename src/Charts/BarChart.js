import React from 'react';
import "chart.js/auto"
import { Bar } from "react-chartjs-2"

const BarChart = () => {

   let data = {
       labels: ["Red", "Blue", "Green", "Purple"],
       datasets: [{
           data: [10, 4, 6, 12],
           backgroundColor: ["red", "blue", "green", "purple"],
           borderColor: ["yellow", "dark", "light", "cyan"],
           borderWidth: 2,
       },]
   }

    return (
        <div style={{padding:"6rem 0"}}>
            <h1>Bar Chart</h1>
             <div style={{width:"500px", margin: "0 auto"}}>
               <Bar data={ data }/>
             </div>
        </div>
    );
};

export default BarChart;