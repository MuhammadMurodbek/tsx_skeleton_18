import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Weather daily',
        },
    },
};

export function Barchart({ rowData }: any) {
    function addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }
      var dailyChange = rowData?.daily?.map((item:any,index:number)=>{
        return addDays(new Date, index).toLocaleString('en-us', {weekday:'long'})
      })
    //   console.log(dailyChange)
    const data = {
        labels:dailyChange,
        datasets: [
            {
                label: 'Temp. °C',
                data: rowData?.daily?.map((item: any) => item?.temp?.day),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    };
    return <Bar options={options} data={data} />;
}
