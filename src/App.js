import React from "react";
import axios from "axios";
import './App.css';
class App extends React.Component{

  
  state={advice:""};
  componentDidMount(){
    this.fetchAdvice();
  }
   fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
          const{ advice } = response.data.slip;
          this.setState({ advice });
        
        })
        .catch((error) => {
        console.log(error);
        }); 
  }
     
  

  render(){
    const { advice } = this.state;
    return(
      
      <div className="app">
  
      <div className="card">
      
      <h3 id="hello">RANDOM QUOTE GENERATOR!</h3>
     
      <h1 className="heading"><b>{advice}</b></h1>

      
      <button className='button1'><a  href={`https://twitter.com/compose/tweet?hashtags=quotes&text=${advice}`} target='_blank'><span><i class="fa-brands fa-twitter"></i></span></a></button>
      <button className="button" onClick={this.fetchAdvice}>
      <span ><b> Click here to get New Quote </b></span>
      
      
     
      </button>
      </div>
      </div>
    );
  }
}
export default App;