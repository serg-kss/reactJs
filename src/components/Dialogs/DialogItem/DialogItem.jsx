import React from 'react';
import c from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

   let pass = '/dialogs/'+ props.id
   return (
      <div className={c.dialog +' '+c.active}>
         <NavLink to={pass}>{props.name}</NavLink>
      </div>
   );
}



export default DialogItem



