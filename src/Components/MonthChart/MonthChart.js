import React from "react";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import Select from 'react-select'

const options = [
    { value: 'Twitter', label: 'Twitter' },
    { value: 'Linkedin', label: 'Linkedin' },
    { value: 'News', label: 'News' }
  ]

function MonthChart({chartData}) {
    let data = {
        options: {
            chart: {
                id: "basic-bar",
                toolbar: {
                  show: false
                }
              },
              plotOptions: {
                bar: {
                  columnWidth: "50%"
                }
              },
              stroke: {
                width: [4, 0, 0]
              },
              xaxis: {
                categories: [1,2,3,4,5,6,7,8,9,10,11,12,"..", 31]
              },
              markers: {
                size: 13,
                strokeWidth: 1,
                hover: {
                  size: 15
                }
              },
              yaxis: {
                tickAmount: 5,
                min: 0,
                max: 100
              }
            },
        series: chartData.series,
        
      };

  return (
        <Row>
            <Col xs={10}>
                <Chart
                    options={data.options}
                    series={data.series}
                    type="bar"
                    height="400"
                    />
            </Col>
            <Col xs={2}>
                <Select options={options} isMulti placeholder="Filter social media"/>
            </Col>
        </Row>
  );
}

export default MonthChart;