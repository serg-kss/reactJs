import {getUsers, getAmountUsers} from '../../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const IS_FECHING = 'IS_FECHING';


let initialState= {
   users: [],
   pageSize: 3,
   portionSize: 2,
   totalUsersCount: 0,
   currentPage: 1,
   isFeching: false,
};

const usersReducer = (state=initialState, action) => {

   switch (action.type) {
      case FOLLOW:
         return {
            ...state, 
            users: state.users.map( u =>{   //делает копию массива при помощи map
               if(u.id === action.userID){
                  return {...u, followed:true}  //делаем копию обьекта и меняем параметр на значение true
               }
               return u;
            }), 
         };
        
      case UNFOLLOW:
         return {
            ...state, 
            users: state.users.map( u =>{   //делает копию массива при помощи map
               if(u.id === action.userID){
                  return {...u, followed:false}  //делаем копию обьекта и меняем параметр на значение false
               }
               return u;
            }), 
         };
      
      case SET_USERS:
         return{...state, users:action.users};
      case SET_CURRENT_PAGE:
         return{
           ...state,
           currentPage:action.currentPage,
         };
      case SET_TOTAL_USERS:
         return{
           ...state,
           totalUsersCount:action.usersCount,
         };
         case IS_FECHING:
         return{
           ...state,
           isFeching:action.is_Feching,
         };
           
      default:
         return state;
   }
   
};

export const followAC = (userID) => {
   return {
     type:FOLLOW,userID,
   }
 };
 
export const unfollowAC = (userID) => {
   return {
     type:UNFOLLOW,userID,
   }
 };

 export const setUsersAC = (users) => {
   return {
     type:SET_USERS,users,
   }
 };

 export const setCurrentPageAC = (currentPage) => {
   return {
     type:SET_CURRENT_PAGE,currentPage,
   }
 };

 export const setTotalUsersCountAC = (usersCount) => {
   return {
     type:SET_TOTAL_USERS,usersCount,
   }
 };

 export const setFechingAC = (is_Feching) => {
   return {
     type:IS_FECHING,is_Feching,
   }
 };

 export const getUsersAmount = () => async (dispatch) => { 
   try{ 
       let response = await getAmountUsers()
       dispatch(setTotalUsersCountAC(response))  
   } catch (error){
      console.error(error)
   }
 }

 export const getUsersByPage = (currentPage) => async (dispatch) => { 
  try{
  let response = await getUsers(currentPage)    
        dispatch(setUsersAC(response))
   } catch (error){
      console.error(error)
   }
 }

export default usersReducer;