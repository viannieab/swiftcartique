"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {
  const data = {
    labels: ['Lettuce', 'Apples', 'Watermelon', 'Broccoli'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 27, 40, 13],
        backgroundColor: [
          'rgba(2, 138, 71, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderColor: [
          'rgba(2, 138, 71, .8)',
          'rgba(0, 0, 255, .5)',
          'rgba(255, 206, 86, .8)',
          'rgba(75, 192, 192, .2)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='dark:bg-slate-700 bg-slate-50 p-8 rounded-lg shadow-xl'>
        <h2 className='text-xl font-bold mb-4 text-slate-800 dark:text-slate-50'>Best Selling Charts</h2>
        {/* chart */}
        <div className="p-5">
          <Pie data={data}/>
        </div>
    </div>
  )
}
