import loaderPic from '../../../assets/images/loader.gif'
import React from 'react';

let Preloader = (props)=>{
   return(
      <div>
         <img src={loaderPic}/>
      </div>
   )
};

export default Preloader;