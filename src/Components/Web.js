import React from 'react'
import './Web.css'
import {Link} from 'react-router-dom'
const Web = () => {
    return (
        <div className="web">
              <div className="web-option">
               <Link to='/'>
               <i className="fas fa-home option-icon"></i>Home
               </Link>
           </div>
           <div className="web-option">
               <Link to="/blogs">
               <i className="fas fa-blog option-icon"></i>Blogs
               </Link>
           </div>
          
        </div>
    )
}

export default Web
