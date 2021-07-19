import React,{Component} from 'react';
import './Home.css'
import Separator from './Separator';
import Skills from './Skills';
import Projects from './Project'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'
class Home extends Component{


    render(){
        return(
           
            <div className="container mt-3">
            <div className="row">
            <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1>thephotogenicbug <br/> <span id="span-title">i am a</span> <br/>
                <span className="info-name">FullStack Web Developer</span></h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4 fw-bold">This is my Portfolio and Blogging webpage i share Website Design and Source Code </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5 ">
                </div>
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
            <div className="row">
            <Separator/>
            </div>
        </div>
        </div>
      
        )
    }

}
export default Home;