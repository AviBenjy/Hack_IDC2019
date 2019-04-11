import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const optionsDef = {
    chart: {
        id: 'salary graph',
        height: 350,
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB'
          },
          labels: {
            style: {
              color: '#008FFB',
            }
          },
          title: {
            text: "Cash flow (4-2019)",
            style: {
              color: '#008FFB',
              fontSize: '18px'
            }
          },
          tooltip: {
            enabled: true
          }
        },
      ],
 
    }

    const seriesDef = [{
        name: 'Cash flow',
        data: [8500, 7000, 6005, 5550, 4009, 2620, 1170, 391]
      }]

const ChartInfo = () => {
    const [options, setOptions] = useState(optionsDef)
    const [series, setSeries] = useState(seriesDef)

    return (
        <Chart 
            options={options} 
            series={series} 
            type="line" 
            width={500} height={320} 
        />
    )
}

export default ChartInfo
