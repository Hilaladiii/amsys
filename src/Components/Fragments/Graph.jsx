import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data, labels, type, xLabel, yLabel, typeLabel }) => {
  const chartRef = useRef();
  const color = ['rgba(123, 232, 232, 1)', 'rgba(130, 219, 219, 1)','rgba(83, 197, 222, 1)','rgba(60, 179, 205, 1)','rgba(48, 165, 191, 1)','rgba(41, 145, 168, 1)']

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: type || 'line' || 'bar',
      data: {
        labels: labels || [],
        datasets: [
          {
            label: '',
            data: data || [],
            fill: false,
            borderColor: 'rgba(41, 132, 228, 1)',
            borderWidth: 3,
            backgroundColor: color || [],
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: xLabel || 'X Axis Label',
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: yLabel || 'Y Axis Label',
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [data, labels, type, xLabel, yLabel]);

  return <canvas ref={chartRef} />;
};

export default Graph;
