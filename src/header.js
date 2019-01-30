import React, { Component } from 'react';
import  './header.css';
import Rating from './rate';
import {Button} from "react-bootstrap";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword:''
         }
    }
handelchange=(event)=>{
    this.setState({keyword:event.target.value},()=>this.props.searchname(this.state.keyword))
    // this.props.searchname(event.target.value)
}
// toaff=(event)=>{
//     this.props.searchname(this.state.keyword)
// }


    render() { 
        return ( <div className='header-container'>
        

<div><input type='search' placeholder="Type movie name to search" onChange={this.handelchange} className="search"/>
<Button bsStyle="primary" bsSize="small" 
onClick={() => {
    this.props.add({
       
        rating:prompt('movie rating: '),
        image:prompt('movie poster: '),
        title: prompt('movie title: ')
        
    })
}}>
      Add movie
    </Button>
</div>
{/* <input type="button" value="Search"  onClick={this.toaff}/> */}
<div><p className="p1">Minimum Rating</p></div>
<div><Rating getrat={this.props.getrat}/></div>


        </div> );
    }
}
 
export default Header;