import React from 'react';
import c from './Post.module.css';

const Post = (props)=>{
   return(      
      <div className={c.posts}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpGdJw8wuHSUgzEIoeDoK86p_akIzZf2ohg&usqp=CAU" alt="" />
          <span>{props.message}</span>
          <div>
            <span>Like {props.likescount}</span>
          </div>
        </div>
      </div>  
   );
}

export default Post



