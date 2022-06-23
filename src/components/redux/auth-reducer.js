const SET_USER_DATA = 'SET_USER_DATA';


let initialState= {
   userId: 2,
   email: 'some-email',
   login: 'some_login',
   isAuth: false,
};

const authReducer = (state=initialState, action) => {

   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state, 
            ...action.data,
            isAuth: true
         };        
           
      default:
         return state;
   }
   
};

export const setLoginData = (userID,emai,login) => {
   return {
     type:SET_USER_DATA,
     data:{userID,emai,login}
   }
 };
 




 

export default authReducer;