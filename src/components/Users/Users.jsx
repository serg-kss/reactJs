/*import React, {useEffect, useState} from 'react';
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom';
import pic from '../../assets/images/avatar.png'



const Users = (props)=>{

   let [currentPage, setCurrentPage]= useState(props.currentPage);

   useEffect(()=>{
      props.getUsersByPage(currentPage) 
    },[currentPage]);


    let pagesCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages = [];
    for(let i=1;i<=pagesCount;i++){
       pages.push(i);
    }


return(
   <div>
      <div className='container mt-5 justify-content-center'>    
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
                  ? <button className="btn btn-outline-primary" onClick={()=>{                    
                  }}>Unfollow</button>
                  : <button className="btn btn-outline-primary" onClick={()=>{                   
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
      <div className='container mt-3'>
         <nav aria-label="Page navigation">
            <ul className="pagination justify-content-start">
               <li className="page-item">
                  <span className="page-link"
                     onClick={()=>{
                        if (currentPage===0){
                           setCurrentPage(1);
                        } else{             
                           setCurrentPage(currentPage-1); 
                        }                                      
                     }}      
                  >Previous</span>
               </li>
               {pages.map(p => {return <li className={currentPage===p?"page-item active":"page-item"}>
                  <span className='page-link'
                     onClick={()=>{             
                        setCurrentPage(p);                                       
                     }}
                  >{p}</span></li>})
               }
               <li className="page-item">
                  <span className="page-link"
                     onClick={()=>{
                        if (currentPage===pagesCount){
                           setCurrentPage(currentPage-1);
                        } else{             
                           setCurrentPage(currentPage+1); 
                        }                                      
                     }}      
                  >Next</span>
               </li>
            </ul>
         </nav>
      </div>
   </div>  
);
}

export default Users
*/

import React, {useEffect, useState} from 'react';
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom';
import pic from '../../assets/images/avatar.png'
import Paginator from '../../utils/paginator/Paginator';


const Users = (props)=>{

   let [currentPage, setCurrentPage]= useState(props.currentPage);

   useEffect(()=>{
      props.getUsersByPage(currentPage) 
    },[currentPage]);


   return(
   <div>
      <div className='container mt-5 justify-content-center'>    
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
                  ? <button className="btn btn-outline-primary" onClick={()=>{                    
                  }}>Unfollow</button>
                  : <button className="btn btn-outline-primary" onClick={()=>{                   
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

      <Paginator totalUsersCount = {props.totalUsersCount}
                 pageSize = {props.pageSize}
                 portionSize = {props.portionSize}
                 currentPage = {currentPage}
                 setCurrentPage = {setCurrentPage}/>

   </div>  
);
}

export default Users


