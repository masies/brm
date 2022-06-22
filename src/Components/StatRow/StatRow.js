import React from "react";
import { Row, Col , Card} from "react-bootstrap";

function StatRow({stats}) {

    let color = "#68a691";
    let styleText = { "fontSize": "25px" };
    let styleNumber = { "fontSize": "50px", "fontFamily": "Limelight, cursive"  };
  return (
        <Row className=" text-center d-flex justify-content-around">
            <Col xs={3}>
                <p style={styleText}> Positive post</p>
                <p style={styleNumber}> {stats.positivePercentage} %</p>
            </Col>
            <Col xs={3}>
                <p style={styleText}> Neutral post</p>
                <p style={styleNumber}> {stats.neutralPercentage} %</p>
            </Col>
            <Col xs={3}>
                <p style={styleText}> Negative post</p>
                <p style={styleNumber}> {stats.negativePercentage} %</p>
            </Col>
            <Col xs={3}>
                <p style={styleText}> number of total post</p>
                <p style={styleNumber}> {stats.totalPosts} </p>
            </Col>
        </Row>
        
    );
}

export default StatRow;