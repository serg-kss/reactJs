import React from 'react';
import c from './BestFriend.module.css';

const BestFriend = (props)=>{
   return(
      <div className={c.best_friend}>
         <div>
            <div className={c.ava}>
               <img src={props.ava} alt="" />
            </div>
            <div className={c.text}>
               <span>{props.text}</span>
            </div>
         </div>                
      </div>
   );
}

export default BestFriend



