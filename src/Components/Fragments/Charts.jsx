import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CartesianChart = ({ data, labels, type, xLabel, yLabel }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: type || 'line',
      data: {
        labels: labels || [],
        datasets: [
          {
            label: '',
            data: data || [],
            fill: false,
            borderColor: 'rgba(41, 132, 228, 1)',
            borderWidth: 3,
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

export default CartesianChart;
