import React,{Component} from 'react';
import Navbarmenu from '../navbarComponent/navbar';
import About from '../aboutComponent/about';
import ReactDOM from 'react-dom';

class Hero extends Component{
  render(){
    return(
      <div className="" id="hero">
        <div className="jumbotron hero">
          <h1>Name Header</h1> 
          <p>dump data is the most popular HTML, CSS, and JS framework for developing
          responsive, mobile-first projects on the web.</p> 
        </div>
      </div>
    );
  }
}
function Mainpanel() {
  return (
    <div className="Mainpanel">
    <Navbarmenu />
    <Hero />
    <About />
    </div>
  );
}

export default Mainpanel;
