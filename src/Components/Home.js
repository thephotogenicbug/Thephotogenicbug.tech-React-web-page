import React,{Component} from 'react';
import './Home.css'
import Code from './code.svg'
import Separator from './Separator';
import Skills from './Skills';
import Projects from './Project'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
class Home extends Component{


    render(){
        return(
           
            <div className="container mt-5">
            <div className="row">
                <div className="col-md-6" id="about-top">
                <h1>thephotogenicbug <br/> <span id="span-title">i am a</span> <br/>
                <span className="info-name">FullStack Web Developer</span></h1>
                </div>
                <div className="col-md-6">
                    <img src={Code} className="img-fluid"  alt="hero-img" title="hero-img"/> 
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center'>
                 <a href="https://github.com/thephotogenicbug"><img src={Github} height="50px" className="m-2" width="50px"   alt="github-profile" title="github-profile"/></a>
                 <a href="https://www.linkedin.com/in/naveen-kumar-b85416177/"> <img src={Linkedin} height="50px" className="m-2" width="50px" alt="linkedin-icon" title="linked-in-profile" /></a>
                 
                </div>
            </div>
            <Separator/>
            <div className="row" id="skills">
                <Skills/>
            </div>
            <div className="row">
              <Projects/>
              
            </div>
        </div>
      
        )
    }

}
export default Home;