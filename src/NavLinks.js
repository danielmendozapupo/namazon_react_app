import React from "react";
import './NavLinks.css'
import {Link} from "react-router-dom";

function NavLinks(){
   return(
       <div className='navlinks'>
           <div className='navlinks_outer'>
               <div className='navlinks_inner'>
                   <Link> Today's deals </Link>
                   <Link> Customer Service </Link>
                   <Link to={'/register'}> Registry </Link>
               </div>
           </div>
       </div>
   )
}
export default NavLinks