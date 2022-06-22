import React from "react";
import { Row, Col , Card} from "react-bootstrap";

function StatRow({percentageNegative, percentagePositive, percentageNeutral, totalPosts}) {

    let color = "#68a691";
    let styleText = { fontsize: "20px" };
    let styleNumber = { "font-size": "50px", "font-family": "Limelight, cursive"  };

  return (
        <Row className=" text-center d-flex justify-content-around">
            <Col xs={3}>
                <p style={styleText}> Positive post</p>
                <p style={styleNumber}> {percentagePositive} %</p>
            </Col>
            <Col xs={3}>
                <p style={styleText}> Neutral post</p>
                <p style={styleNumber}> {percentageNeutral} %</p>
            </Col>
            <Col xs={3}>
                <p style={styleText}> Negative post</p>
                <p style={styleNumber}> {percentageNegative} %</p>
            </Col>
            <Col xs={3}>
                <p style={styleText}> number of total post</p>
                <p style={styleNumber}> {totalPosts} </p>
            </Col>
        </Row>
        
    );
}

export default StatRow;