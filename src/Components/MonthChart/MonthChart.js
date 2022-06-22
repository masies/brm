import React from "react";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import Select from 'react-select'
const options = [
    { value: 'Twitter', label: 'Twitter' },
    { value: 'Linkedin', label: 'Linkedin' },
    { value: 'News', label: 'News' }
  ]
function MonthChart() {
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
        series: [
            {
              name: "Count",
              type: "line",
              data: [30, 40, 25, 50, 49, 21, 70, 51, 30, 40, 25, 50, 49, 21]
            },
            {
              name: "Sentiment",
              type: "column",
              data: [23, 12, 54, 61, 32, 56, 81, 19, 30, 40, 25, 50, 49, 21]
            }
          ],
        
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
                <Select options={options} isMulti />
            </Col>
        </Row>
  );
}

export default MonthChart;