import React from 'react';
import BestFriend from './BestFriend/BestFriend';
import c from './BestFriends.module.css';

const BestFriends = (props)=>{
   let bestFriendsData = props.bestFriends.map( (el) => {return <BestFriend ava={el.ava} text={el.text}/>});
   return(
      <div className={c.content}>
         <div>
            <h4>Best Friends</h4>
         </div>
         <div className={c.best_friends}>
            {bestFriendsData}
         </div>                 
      </div>        
   );
}

export default BestFriends



