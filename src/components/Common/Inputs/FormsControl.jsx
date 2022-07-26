import React from 'react';
import { Field } from 'redux-form';
import styles from './FormControl.module.css'



export const TextArea = ({input, meta,...props})=>{ //input and meta убрали из пропсов, остальное в пропсах прокинули
   const hasError = meta.touched && meta.error;
   return(
      <div className={styles.formControl + " " + (hasError? styles.error: "")}>
         <div className = "col-md-5">
             <textarea {...input}{...props} className="form-control"/>
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



export const createField = (placeholder, name, validators, component, props = {}, text = '') =>{
   return(
      <div>
         <Field placeholder = {placeholder}
             name = {name}
             validate = {validators}
             component = {component}
             {...props}
             type = 'text'
             className='form-control'
         />{text}
      </div>      
   )
}