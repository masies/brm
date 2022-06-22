import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
import chartData from './../../MockData/chartData.json'

function MyHeader({ updateChartData }) {

    const [keywords, setKeywords] = React.useState([]);

    // this function will get the data from the API
    const getJsonDataFromFile =  () => {
        updateChartData(chartData)
    }
    
    return (
            <Row>
                <Col xs={6}>
                <CreatableSelect
                    isMulti
                    onChange={setKeywords}
                    options={keywords}
                    placeholder="Search for keywords"
                />
                </Col>
                <Col>
                    <Button variant="primary" onClick={getJsonDataFromFile}> load Data </Button>
                </Col>
                <Col>
                    <Button variant="success"> set alert! </Button>
                </Col>
            </Row>
    );
}

export default MyHeader;