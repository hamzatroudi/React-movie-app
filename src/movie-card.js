import React, {Component } from 'react';
import  './movie-card.css';
import Rating from './rate.js';


const Card=(props)=>{
     return(<div className="item">
     <div className="rate"><Rating  rat={props.item.rating} /></div>
     <div><img src ={props.item.image} className="imglist"/>
     </div>
     <div className="filmtitle"><p> {props.item.title}</p></div>
    
     
     </div>
    
 )
    
 }
export default Card;