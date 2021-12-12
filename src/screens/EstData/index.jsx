import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import './EstData.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const EstData = () => {
    const Graph = {
        labels: ['Pokemon', 'Yu-Gi-Oh', 'Magic'],
        datasets: [
            {
                label: '# of Votes',
                data: [4, 7, 8],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <>
            <div className='chartStyle'>
                <p>Cartas registradas por jogo:</p>
                <br />
                <div className='chartContainer'>
                    <Pie style={{ height: '200px' }} data={Graph}></Pie>
                </div>
            </div>

        </>
    );
}

export default EstData;