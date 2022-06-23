import React from 'react';
import c from './Music.module.css';
import { Redirect } from 'react-router-dom';


const Music = (props)=>{

   let num = 1;
   //Redirect компонента пример -- отправляет на другой URL
   if(num ===1){
      return (
         <Redirect to='/users'/>
      )
   }

   return(      
      <div>
        Music
      </div> 
   );
}

export default Music



