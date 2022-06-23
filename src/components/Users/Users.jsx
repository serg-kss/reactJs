import React from 'react';
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom';
import pic from '../../assets/images/avatar.png'



const Users = (props)=>{

   let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
   let pages = [];
   for(let i=1;i<=pagesCount;i++){
      pages.push(i);
   }
    

return(
   <div>
      <div>
         {pages.map(p => {return <span className={props.currentPage===p && styles.selectedPage} 
         onClick={()=>{             
            props.setCurrentPageAC(p);                               
         }}>{p}</span>})
         }
      </div>     
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <NavLink to={'/profiles/'+u.id}>
                  <img src={pic} 
                     className={styles.Users_photo}/>
                  </NavLink>
               </div>
               <div>
                 {u.followed 
                  ? <button onClick={()=>{
                     
                  }}>Unfollow</button>
                  : <button onClick={()=>{
                    
                     }}>Follow</button>}
               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.city}</div>
               </span>
            </span>
         </div>)
      }
   </div>
);
}

export default Users



