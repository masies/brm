import React from "react";
import MonthChart from "../MonthChart/MonthChart";
import MyHeader from "../Header/MyHeader";
import StatRow from "../StatRow/StatRow";
import Posts from "../Posts/Posts";
import logo from "./../../Images/ubs_logo.png";
import { Container, Row, Col, Image, Navbar } from "react-bootstrap";
function MainApp() {

  const [chartData, setChartData] = React.useState([]);
  const [postData, setPostData] = React.useState([]);
  const [postStats, setPostStats] = React.useState();

  return (
    <Container>
        <Row className="d-flex align-items-center text-center p-3 mb-2 mt-2 border">
          <Col xs={1}>
            <img width="70px" height="auto" className="img-responsive" src={logo}  alt="logo" />
          </Col>
          <Col >
            <h3> Brand Reputation Monitoring Dashboard  </h3>
          </Col>
        </Row>
        <Row className="p-4 mb-2 border">
          <MyHeader updateChartData={setChartData} updatePostsData={setPostData} updatePostStats={setPostStats}/>
        </Row>
        { chartData.series && <Row className="p-1 mb-2 border">
          <MonthChart chartData={chartData}/>
        </Row> }
        { postStats && <Row className="p-4 mb-2 border">
            <StatRow stats={postStats}/>
        </Row> }
        { postData.posts && <Row className="p-4 mb-2 border">
          <Posts postData={postData}/>
        </Row> }
        
    </Container>
  );
}

export default MainApp;