import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = (props)=>{

   return(
    <div className='container mt-5'>
    
      <p>Blog by 
        <NavLink to="/profile">@SK</NavLink>.
      </p>
      <p>
        <NavLink to="/">Back to main page</NavLink>
      </p>
   
    </div>
   );
}


export default Footer



