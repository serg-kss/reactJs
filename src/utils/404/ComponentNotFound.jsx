import React from 'react';
import { NavLink } from 'react-router-dom';


const ComponentNotFound = (props)=> {
   return(
      <div className='container mt-5'>
         <div className='col-12 text-center'>
            <h1>404 Not Found</h1>
            <NavLink to={'/'}>Main Page</NavLink>
         </div>
      </div>
   )
}

export default ComponentNotFound