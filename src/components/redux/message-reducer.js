
const SEND_MESSAGE = 'SEND_MESSAGE';

let initState = {
  messages: [
     {id:1, t:'Hi'}, 
     {id:2, t:'How is it'},
     {id:3, t:'What is this'},
     {id:4, t:'Cool'},
  ],
  dialogs: [
     {id:1, n:'Serg'},
     {id:2, n:'Lera'},
     {id:3, n:'Mother'},
     {id:4, n:'Father'},
  ],
};

const messageReducer = (state=initState, action) => {

   if (action.type === SEND_MESSAGE){
      let body = action.newMessage;
       let stateCopy = {...state};      
       stateCopy.messages = [...state.messages];
       stateCopy.messages.push({id:5, t:body});
       return stateCopy;
    }

   return state;
}

export const sendMessageCreator = (value) => {
   return {
     type:SEND_MESSAGE,
     newMessage:value,
   }
 };
 

export default messageReducer;