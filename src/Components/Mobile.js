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
               <Link to="/">
               <i className="fas fa-home option-icon"></i>Home
               </Link>
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
