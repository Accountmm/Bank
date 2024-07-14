"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: FC<DoughnutChartProps> = ({ accounts }) => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1000, 1250, 3000],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa'],
      }
    ]
  }
  return (
    <Doughnut
      data={data}
      options={{
        animation: true,
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          }
        }
      }}
    />
  )
}

export default DoughnutChart