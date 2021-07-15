import React from 'react'
import './Mobile.css'
import {Link} from 'react-router-dom';
const Mobile = ({isOpen, setIsOpen}) => {
    return (
        <div className="mobile">
          <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
          <i class="fas fa-times"></i> 
        </div>  
        <div className="mobile-options">
        <div className="mobile-option">
               <Link to="projects">
               <i className="fas fa-pencil-alt option-icon"></i>Projects
               </Link>
           </div>
           <div className="mobile-option">
               <a href="#skills">
               <i className="fas fa-laptop option-icon"></i>Skills
               </a>
           </div>
           <div className="mobile-option">
               <a href="#contact">
               <i className="fas fa-user option-icon"></i>Contact
               </a>
           </div>  
           <div className="mobile-option">
               <Link to="blogs">
               <i className="fas fa-blog option-icon"></i>Blogs
               </Link>
           </div> 
        </div>
        </div>
    )
}

export default Mobile
