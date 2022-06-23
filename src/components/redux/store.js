import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {
   _state : {

      profilePage:{
         posts: [
            {id:1, message:'Hi it is some test!', likesCount: '5'},
            {id:2, message:'Hi it is some test, second try!', likesCount: '7'},
         ],
         newPostText: 'How are U?',
      },
   
      messagesPage:{
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
         newMessageBody: '',
      },
   
      sidebar:{
         bestFriends:[
            {
               id:1, 
               ava:'https://img.freepik.com/free-vector/avatar-of-boy-with-emotions-of-suspicious-displeased-face-in-tiger-hat-cute-kid-with-annoyed-express_427567-2092.jpg?size=338&ext=jpg&ga=GA1.1.2140516742.1643932800',
               text: 'Lera'
            },
            {
               id:2, 
               ava:'https://img.freepik.com/free-vector/avatar-of-boy-with-emotions-of-suspicious-displeased-face-in-tiger-hat-cute-kid-with-annoyed-express_427567-2092.jpg?size=338&ext=jpg&ga=GA1.1.2140516742.1643932800',
               text: 'Kirill'
            },
            {
               id:3, 
               ava:'https://img.freepik.com/free-vector/avatar-of-boy-with-emotions-of-suspicious-displeased-face-in-tiger-hat-cute-kid-with-annoyed-express_427567-2092.jpg?size=338&ext=jpg&ga=GA1.1.2140516742.1643932800',
               text: 'Andrew'
            }
         ]
   
      }
                
    },
    getState(){
       return this._state;
      },
    _callSubscriber (){},
    subscribe(observer){
      this._callSubscriber = observer;
    },

    dispatch(action){
      this._state.profilePage = profileReducer(this._state.profilePage,action);
      this._state.messagesPage = messageReducer(this._state.messagesPage,action);
      this._state.sidebar = sidebarReducer(this._state.sidebar,action);
      this._callSubscriber(this._state);
       
    },
   
}





 export default store;