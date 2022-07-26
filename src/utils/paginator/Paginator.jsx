import React, {useState} from 'react';


const Paginator = (props) =>{

   let totalUsersCount = props.totalUsersCount;
   let pageSize = props.pageSize;
   let currentPage = props.currentPage;
   let setCurrentPage = props.setCurrentPage;
   let portionSize = props.portionSize;
   let back = '<';
   let forward = '>';
   let pagesCount = Math.ceil(totalUsersCount/pageSize);
   let portionCount = Math.ceil(pagesCount/portionSize);
   let [portionNumber, setPortionNumber]= useState(1);
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;
   let pages = [];

   for (let i = 1; i <= pagesCount; i++){
      pages.push(i);
   };

   return(
      <div className='container mt-3'>
         <nav aria-label="Page navigation">
            <ul className="pagination justify-content-start">
               {
                  portionNumber > 1 &&
                  <li className="page-item">
                     <span className="page-link"
                        onClick={()=>{
                           setPortionNumber(portionNumber - 1)                                
                        }}      
                     >{back}</span>
                  </li>
               }

               {
                  pages
                  .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                  .map((p) => {return <li className={currentPage===p?"page-item active":"page-item"} key={p}>
                     <span className='page-link'
                        key={p}
                        onClick={()=>{             
                           setCurrentPage(p);                                       
                        }}
                     >{p}</span></li>})
               }

               {
                  portionCount > portionNumber &&
                  <li className="page-item">
                     <span className="page-link"
                        onClick={()=>{
                           setPortionNumber(portionNumber + 1)                                     
                        }}      
                     >{forward}</span>
                  </li>
               }              
            </ul>
         </nav>
      </div>
   )
}

export default Paginator