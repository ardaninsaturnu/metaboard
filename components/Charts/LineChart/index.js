// components/LineChart.js
import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const LineChart = ({ data, canvasId }) => {
  useEffect(() => {
    const ctx = document.getElementById(canvasId).getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Portfolio', 'Price', 'Balance'],
        datasets: [
          {
            data: [data.portfolio, data.price, data.balance],
            label: `${data.description} (${data.token})`,
            borderColor: '#3e95cd',
            backgroundColor: '#7bb6dd',
            fill: false,
          },
        ],
      },
    });
  }, [data, canvasId]);
  
  return <canvas id={canvasId}></canvas>;
};

export default LineChart;
