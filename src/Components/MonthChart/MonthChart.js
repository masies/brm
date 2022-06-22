import React from "react";
import { Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";

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
                categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
              },
              markers: {
                size: 13,
                strokeWidth: 1,
                hover: {
                  size: 15
                }
              },
              yaxis: 
              [
                {
                  title: {
                    text: "Sentiment"
                  },
                  min: 0,
                  max: 3,
                  tickAmount: 3,
                  labels: {
                        formatter: (value) => { 
                            if (value == 0){
                                return "negative"
                            }
                            if (value == 1){
                                return "neutral"
                            }
                            if (value == 2){
                                return "positive"
                            }
                            return ""
                        },
                    },
                },
                {
                  opposite: true,
                  title: {
                    text: "Post Count"
                  },
                  tickAmount: 5
                }
              ]
            },
        series: chartData.series,
        
      };

  return (
    <Chart
        options={data.options}
        series={data.series}
        type="bar"
        height="400"
        />
  );
}

export default MonthChart;