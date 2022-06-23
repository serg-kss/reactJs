import React from 'react';
import c from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Login from '../Login/Login';

const Header = (props)=>{


   




   return(
      
<header className="blog-header lh-1 py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <NavLink className="link-secondary" to="#">Subscribe</NavLink>
      </div>
      <div className="col-4 text-center">
        <NavLink className="text-dark" to="#">Large</NavLink>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        {props.isAuth?props.login:<NavLink className="btn btn-sm btn-outline-secondary" to={'/login'}>Login</NavLink>}
      </div>
    </div>
  </header>






      
   );
}



export default Header



