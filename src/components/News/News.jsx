import React from 'react';
import { Redirect } from 'react-router-dom';
import c from './News.module.css';

const News = (props)=>{

   let num = 1;
   //Redirect компонента пример -- отправляет на другой URL
   if(num ===1){
      return (
         <Redirect to='/users'/>
      )
   }

   return(      
      <div>
        News
      </div> 
   );
}

export default News



