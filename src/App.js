import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Liste from './movie-list';


const newstab=[
  {rating:'2' , image:"https://resizing.flixster.com/iHqZvdiQHoa9y-0xN_JRsEEK1PA=/180x270/v1.bTsxMTE3MTI5OTtqOzE4MDQzOzIwNDg7ODAwOzEyMDA" , title:"THE SEARCHERS"},
  {rating:'4' , image:"https://resizing.flixster.com/loZpIr1mDr_SLYX6qIy-_JMqwWg=/180x240/v1.bTsxMTI5MjI1MjtqOzE4MDgyOzIwNDg7MTUzNjsyMDQ4" , title:"THE TERMINATOR"},
  {rating:'3' , image:"https://resizing.flixster.com/B3fzE7dCUwjunfDIt4pzLcpmNo4=/180x270/v1.bTsxMTE3Nzc5OTtqOzE4MDYzOzIwNDg7ODAwOzEyMDA" , title:"VERTIGO"},
  {rating:'3' , image:"https://resizing.flixster.com/GvqJe_cp3AjVb91M87H06fPukfM=/180x266/v1.bTsxMTE5MDUwMztqOzE4MDc3OzIwNDg7NTg1Ozg2NA" , title:"INSIDE OUT"},
  {rating:'2' , image:"https://resizing.flixster.com/rmcuMW-Gg4Nb2Om3rVG48CBpdBY=/180x267/v1.bTsxMjU1NzcyNTtqOzE3OTkwOzIwNDg7MTY4ODsyNTAw" , title:"BLACK PANTHER"},
  {rating:'1' , image:"https://resizing.flixster.com/nJ7QbCJmlSoB2vwGY7LB_T07DVk=/180x240/v1.bTsxMTI5MjkzNTtqOzE4MDQ1OzIwNDg7MjQwMDszMjAw" , title:"KING KONG"},
  {rating:'3' , image:"https://resizing.flixster.com/7Ckz1RS-u7RR0MUcdTG6ySEk_Kw=/180x270/v1.bTsxMTE3MTYxMjtqOzE4MDQxOzIwNDg7ODAwOzEyMDA" , title:"THE GODFATHER"},
  {rating:'4', image:"https://www.movieartarena.com/imgs/bladerunner2049ff.jpg", title:"BLADE:runner"},
  {rating:'5', image:"https://wishihab.github.io/CD-Rent-Website/interface/img/product-1.jpg", title:"STAR TREK"},
  {rating:'2' , image:"https://resizing.flixster.com/iHqZvdiQHoa9y-0xN_JRsEEK1PA=/180x270/v1.bTsxMTE3MTI5OTtqOzE4MDQzOzIwNDg7ODAwOzEyMDA" , title:"THE SEARCHERS"},
  {rating:'4' , image:"https://resizing.flixster.com/loZpIr1mDr_SLYX6qIy-_JMqwWg=/180x240/v1.bTsxMTI5MjI1MjtqOzE4MDgyOzIwNDg7MTUzNjsyMDQ4" , title:"THE TERMINATOR"},
  {rating:'3' , image:"https://resizing.flixster.com/B3fzE7dCUwjunfDIt4pzLcpmNo4=/180x270/v1.bTsxMTE3Nzc5OTtqOzE4MDYzOzIwNDg7ODAwOzEyMDA" , title:"VERTIGO"},
  {rating:'3' , image:"https://resizing.flixster.com/GvqJe_cp3AjVb91M87H06fPukfM=/180x266/v1.bTsxMTE5MDUwMztqOzE4MDc3OzIwNDg7NTg1Ozg2NA" , title:"INSIDE OUT"},
  {rating:'2' , image:"https://resizing.flixster.com/rmcuMW-Gg4Nb2Om3rVG48CBpdBY=/180x267/v1.bTsxMjU1NzcyNTtqOzE3OTkwOzIwNDg7MTY4ODsyNTAw" , title:"BLACK PANTHER"},
  {rating:'2' , image:"https://resizing.flixster.com/iHqZvdiQHoa9y-0xN_JRsEEK1PA=/180x270/v1.bTsxMTE3MTI5OTtqOzE4MDQzOzIwNDg7ODAwOzEyMDA" , title:"THE SEARCHERS"},
  {rating:'4' , image:"https://resizing.flixster.com/loZpIr1mDr_SLYX6qIy-_JMqwWg=/180x240/v1.bTsxMTI5MjI1MjtqOzE4MDgyOzIwNDg7MTUzNjsyMDQ4" , title:"THE TERMINATOR"},
  {rating:'3' , image:"https://resizing.flixster.com/B3fzE7dCUwjunfDIt4pzLcpmNo4=/180x270/v1.bTsxMTE3Nzc5OTtqOzE4MDYzOzIwNDg7ODAwOzEyMDA" , title:"VERTIGO"},
  {rating:'3' , image:"https://resizing.flixster.com/GvqJe_cp3AjVb91M87H06fPukfM=/180x266/v1.bTsxMTE5MDUwMztqOzE4MDc3OzIwNDg7NTg1Ozg2NA" , title:"INSIDE OUT"},
  {rating:'2' , image:"https://resizing.flixster.com/rmcuMW-Gg4Nb2Om3rVG48CBpdBY=/180x267/v1.bTsxMjU1NzcyNTtqOzE3OTkwOzIwNDg7MTY4ODsyNTAw" , title:"BLACK PANTHER"}
  
]

class App extends Component {

  constructor(props){
  
    super(props)
      
    this.state={
     news:newstab  ,
     filtred:newstab  ,
     //rate:0
      
    }
    
    }
    search(keyword){
   
      let filter1=this.state.news.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
       
       this.setState({filtred:filter1})
       
       }

       getrating=(x)=>{
        let filter1=this.state.news.filter((el,i)=>{return el.rating>=x})
        this.setState({filtred:filter1})
       //this.setState({rate:rate})
       }



       addmovie=(y)=>{
        let filter1=this.state.filtred.concat(y)
        
        this.setState({filtred:filter1,news:filter1})

        
      }
      
   
  render() {
    return (
      <div className="App">
      <Header  searchname={(keyword)=>this.search(keyword)}
               getrat={(x)=>this.getrating(x)} 
               add={(y) => this.addmovie(y)} 
       />
      <Liste news={this.state.filtred}   />
      

      
      </div>
    );
  }
}

export default App;
