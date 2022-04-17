
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: 'Weather hourly',
    },
  },
};

export function LineChart({rowData}:any) {
  function addHoursToDate(date: Date, hours: number): Date {
    return new Date(new Date(date).setHours(date.getHours() + hours));
  }
  var hourly = rowData?.hourly?.map((item:any,index:number)=>{
    return addHoursToDate(new Date, index).getHours() + ":" + new Date().getMinutes()
  })
  const data = {
    labels: hourly,
    datasets: [{
      label: 'Temp. °C',
      data: rowData?.hourly?.map((item:any)=>item?.temp),
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      // backgroundColor:'green'
    }]
  };
  return <Line options={options} data={data} />;
}

