import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = (props)=>{
   return(
      
<div className="nav-scroller py-1 mb-2">
   <nav class="nav d-flex justify-content-between">
      <NavLink className="p-2 link-secondary" to='/profile' >Profile</NavLink>
      <NavLink className="p-2 link-secondary" to='/dialogs' >Dialogs</NavLink>
      <NavLink className="p-2 link-secondary" to='/users' >Users</NavLink>
      <NavLink className="p-2 link-secondary" to='/news' >News</NavLink>
      <NavLink className="p-2 link-secondary" to='/music' >Music</NavLink>
      <NavLink className="p-2 link-secondary" to='/settings' >Settings</NavLink>
      <NavLink className="p-2 link-secondary" to='/about' >About us</NavLink>
    </nav>
</div>



   );
}

export default Nav



