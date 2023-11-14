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
            label: 'Chart Title',
            data: data || [],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
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
