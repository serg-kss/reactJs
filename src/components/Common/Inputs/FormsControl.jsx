import React from 'react';
import styles from './FormControl.module.css'



export const TextArea = ({input, meta,...props})=>{ //input and meta убрали из пропсов, остальное в пропсах прокинули
   const hasError = meta.touched && meta.error;
   return(
      <div className={styles.formControl + " " + (hasError? styles.error: "")}>
         <div class = "col-md-3">
             <textarea {...input}{...props} class="form-control"/>
         </div>
         {hasError && <span>{meta.error}</span>}
         
      </div>
   )
}



export const Input = ({input, meta,...props})=>{ //input and meta убрали из пропсов, остальное в пропсах прокинули
   const hasError = meta.touched && meta.error;
   return(
      <div className={styles.formControl + " " + (hasError? styles.error: "")}>
         <div>
             <input {...input}{...props}/>
         </div>
         {hasError && <span>{meta.error}</span>}
         
      </div>
   )
}