import Dialogs from './Dialogs';
import {sendMessageCreator} from '../redux/message-reducer'
import { connect } from 'react-redux';


let mapStateToProps = (state)=>{
  return{
    messagesPage:state.messagesPage
  }
}
let mapDispatchToProps = (dispatch)=>{
  return{
    sendMessage: (value)=>{
      dispatch(sendMessageCreator(value))
    }
    
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer



