import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
import chartData from './../../MockData/chartData.json'
import postsData from './../../MockData/postsData.json'
import Select from 'react-select'

const options = [
    { value: 'Twitter', label: 'Twitter' },
    { value: 'Linkedin', label: 'Linkedin' },
    { value: 'News', label: 'News' }
  ]

function MyHeader({ updateChartData, updatePostsData, updatePostStats }) {

    const [keywords, setKeywords] = React.useState([]);

    const getStatsForPosts = (posts) => {
        let totalPosts = posts.length;
        
        let totalPositive = posts.filter((post) => post.sentiment === "positive").length;
        let totalNeutral = posts.filter((post) => post.sentiment === "neutral").length;
        let totalNegative = posts.filter((post) => post.sentiment === "negative").length;

        let positivePercentage = (totalPositive / totalPosts) * 100;
        let negativePercentage = (totalNegative / totalPosts) * 100;
        let neutralPercentage = (totalNeutral / totalPosts) * 100;
        return {
          "totalPosts" : totalPosts,
          "positivePercentage" : positivePercentage,
          "negativePercentage" : negativePercentage,
          "neutralPercentage" : neutralPercentage
        }
      }

    // this function will get the data from the API
    const getJsonDataFromFile_chart =  () => {
        updateChartData(chartData)
    }

    // this function will get the data from the API
    const getJsonDataFromFile_posts =  () => {
        updatePostsData(postsData)
        updatePostStats(getStatsForPosts(postsData.posts))
    }

    const fetchData = () => {
        getJsonDataFromFile_posts()
        getJsonDataFromFile_chart()
    }
    
    return (
            <Row>
                <Col xs={5}>
                <CreatableSelect
                    isMulti
                    onChange={setKeywords}
                    options={keywords}
                    placeholder="Search for keywords"
                />
                </Col>
                <Col xs={2}>
                    <Button variant="primary" onClick={fetchData}> load Data </Button>
                </Col>
                <Col xs={2}>
                    <Button variant="success"> set alert! </Button>
                </Col>
                <Col xs={3}>
                    <Select options={options} isMulti placeholder="Filter social media"/>
                </Col>
            </Row>
    );
}

export default MyHeader;