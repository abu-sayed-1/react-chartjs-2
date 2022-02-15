import React from 'react';
import "chart.js/auto"
import { Doughnut } from "react-chartjs-2"

const DoughnutChart = () => {

   let data = {
       labels: ["Red", "Blue", "Green", "Purple"],
       datasets: [{
           data: [10, 4, 6, 12],
           backgroundColor: ["red", "blue", "green", "purple"],
           borderColor: ["yellow", "dark", "light", "cyan"],
           borderWidth: 3,
       },]
   }

    return (
        <div>
            <h1>Doughnut Chart</h1>
             <div style={{width:"500px", margin: "0 auto"}}>
               <Doughnut data={ data }/>
             </div>
        </div>
    );
};

export default DoughnutChart;