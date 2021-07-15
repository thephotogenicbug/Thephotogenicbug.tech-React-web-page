import React,{Component} from 'react';
import './Home.css'
import Code from './code.svg'
import Separator from './Separator';
import Skills from './Skills';
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import {Helmet} from 'react-helmet'
class Home extends Component{


    render(){
        return(
           
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-6" id="about-top">
                <h1>thephotogenicbug.tech i am a  <br/>
                <span className="info-name">FullStack Web Developer</span></h1>
                </div>
                <div className="col-md-6">
                    <img src={Code} className="img-fluid" /> 
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center'>
                 <a href="https://github.com/thephotogenicbug"><img src={Github} height="50px" className="m-2" width="50px" /></a>
                 <a href="https://www.linkedin.com/in/naveen-kumar-b85416177/"> <img src={Linkedin} height="50px" className="m-2" width="50px" /></a>
                 
                </div>
            </div>
            <Separator/>
            <div className="row" id="skills">
                <Skills/>
             
               
            </div>
            <div className="row">
            {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="naveen-kumar-b85416177" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/naveen-kumar-b85416177?trk=profile-badge">Naveen kumar</a></div> */}
              
            </div>
        </div>
      
        )
    }

}
export default Home;