import React, { Component } from 'react';
import Card from './movie-card';
import './movie-list.css';
import {Row,Col,Grid} from  "react-bootstrap";

class Liste extends Component {
   
    render() { 
        const {news}=this.props
        return ( <Grid><Row className="list">
          { news.map((el,index)=><Col  lg={3} md={4} sm={6}  ><Card item={el} key={index}  /> 
          </Col>)}
          
        </Row></Grid>
        
        );
    }
}



        



export default Liste;

