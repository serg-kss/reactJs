import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = (props)=>{

   return(
      <div className='container'>
    
      <p>Blog template built for <NavLink to="">Bootstrap</NavLink> by <NavLink to="">@mdo</NavLink>.</p>
      <p>
        <NavLink to="#">Back to top</NavLink>
      </p>
   
    </div>
   );
}



export default Footer



