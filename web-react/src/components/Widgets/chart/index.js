import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import styled from '@emotion/styled'

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
      <Card>

        <Chart 
            options={options} 
            series={series} 
            type="line" 
            width={500} height={320} 
            />
            </Card>
    )
}

export default ChartInfo

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    margin: 8px;
    transition: 0.3s;
    padding: 16px 16px;
    line-height: 32px;
    border-radius: 4px;
    background: ${'#fff'};
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`