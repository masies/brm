import React from "react";
import MonthChart from "../MonthChart/MonthChart";
import { Container, Row, Col } from "react-bootstrap";
function MainApp() {

  return (
    <Container>
        <Row className="p-5 m-1 border">
            header, 
            here we will have the search bar to select categories and show them. Plus button to set the alert
        </Row>
        <Row className="p-5 m-1 border">
          <MonthChart/>
        </Row>
        <Row className="p-5 m-1 border">
            stats section, 
            we will have 4 big numbers : % of positive post , % of negative post , % of neutral post , number of total post
        </Row>
        <Row className="p-5 m-1 border">
            list of all posts with : 
            - date
            - which social media
            - Sentiment
            - text (which is a link if possible)
            - like Count
            - comment Count
            - share Count
        </Row>
        
    </Container>
  );
}

export default MainApp;