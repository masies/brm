import React from "react";
import MonthChart from "../MonthChart/MonthChart";
import MyHeader from "../Header/MyHeader";
import StatRow from "../StatRow/StatRow";
import { Container, Row, Col } from "react-bootstrap";
function MainApp() {

  const [chartData, setChartData] = React.useState([]);

  return (
    <Container>
        <Row className="p-3 mb-2 mt-2 border">
          UBS Title
        </Row>
        <Row className="p-5 mb-2 border">
          <MyHeader updateChartData={setChartData}/>
        </Row>
        { chartData.series && <Row className="p-1 mb-2 border">
          <MonthChart chartData={chartData}/>
        </Row>}
        <Row className="p-5 mb-2 border">
            <StatRow percentagePositive={20} percentageNegative={10} percentageNeutral={70} totalPosts={1234}/>
        </Row>
        <Row className="p-5 mb-2 border">
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