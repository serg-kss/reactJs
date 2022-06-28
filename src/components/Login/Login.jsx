import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {maxlengthCreator,required} from '../../utils/validators/validator';
import {Input} from '../Common/Inputs/FormsControl';


const maxLength20 = maxlengthCreator(20);
const maxLength15 = maxlengthCreator(15);


const LoginForm = (props)=>{
   
   return(        
         <form onSubmit={props.handleSubmit}>
            <div>
               <Field placeholder={'Login'} name={'login'} component={Input} validate={[required,maxLength20]}/>
            </div>
            <div>
               <Field placeholder={'Password'} name={'password'} component={Input} validate={[required,maxLength15]}/>
            </div>
            <div>
               <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            <div>
               <button>Login</button>
            </div>

         </form>     
   );
}

const LoginReduxForm = reduxForm({
   // a unique name for the form
   form: 'login'
})(LoginForm);

const Login = (props)=>{

   const onSubmit = (formData)=>{
      console.log(formData)
   }
   return(        
         <div>
            <div><h4>Login</h4></div>
            <div><LoginReduxForm onSubmit={onSubmit}/></div>
         </div>    
   );
}

export default Login



