import React,{Component} from "react";
import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

class DoughnutChart extends Component{
constructor(){
    super()
    this.state={
        data: {
            labels: ["HTML", "CSS", "JAVASCRIPT", "CHART.JS", "JQUERY", "BOOTSTRP"],
            datasets: [{
            label: "online tutorial subjects",
            data: [20, 40, 13, 35, 20, 38],
            backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue'],
            hoverOffset: 5
            }],
        },
        options: {
            responsive: true,
        },
    }
}

    render(){
        return(
            <React.Fragment>
                <Doughnut data={this.state.data} options={this.state.options}/>
            </React.Fragment>
        )
    }
}

export default DoughnutChart;