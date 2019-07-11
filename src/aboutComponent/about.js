import React,{Component} from 'react';

class About extends Component{
    render(){
        return(
            <div className="container-fluid" id="about">
                <div className="row ">
                    <div className="col-md-6 no-pd">
                       <img src="https://www.w3schools.com/bootstrap4/img_avatar3.png" />
                    </div>
                    <div className="col-md-6">
                        <h3>Data</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default About;