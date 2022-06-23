import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import {maxlengthCreator,required} from '../../utils/validators/validator';
import {TextArea} from '../Common/Inputs/FormsControl';


const Dialogs = (props)=>{

  let state = props.messagesPage;
       
   let dialogsElements = state.dialogs.map( (el) => {return <DialogItem name={el.n} key={el.id} id={el.id}/>});     
   let messageElements = state.messages.map( (el) => {return <Message text={el.t} key={el.id}/>});

   const addNewMessage = (values)=>{
    props.sendMessage(values.newMessageBody)
 }

   return(      
      <div className={c.dialogs}>
        <div className={c.dialogs__items}>
            {dialogsElements}          
        </div>
        <div className={c.messages}>
            <div>{messageElements}</div> 
                  <DialogReduxForm
                    onSubmit={addNewMessage}
                    />
        </div>
      </div>
   );
}

const maxLength100 = maxlengthCreator(100);

let sendMessageForm = (props) =>{
    return(
      <form onSubmit={props.handleSubmit}>
        <Field component={TextArea} name={'newMessageBody'} placeholder={'Enter your message'}
          validate={[required,maxLength100]}/>             
        <button >Send</button>
      </form> 
    )
}

const DialogReduxForm = reduxForm({
  // a unique name for the form
  form: 'addMessageForm'
})(sendMessageForm);

export default Dialogs



