import {getUserProfile, getUserStatus, updateUserStatus} from '../../api/api'

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';


let initialState= {
   posts: [
      {id:1, message:'Hi it is some test!', likesCount: '5'},
      {id:2, message:'Hi it is some test, second try!', likesCount: '7'},
   ],
   profile: {},
   status: 'status here',
};

const profileReducer = (state=initialState, action) => {

   if (action.type === ADD_POST){
      let newPost = {
         id:5, 
         message: action.newPost, 
         likesCount: '0'
       };
       let stateCopy ={...state};
       stateCopy.posts = [...state.posts];
       stateCopy.posts.push(newPost);
       stateCopy.newPostText ='';
       return stateCopy;
    }else if (action.type === SET_USER_PROFILE){ 
      let stateCopy ={...state};
      stateCopy.profile = action.profileAC;
      return stateCopy;
    }else if (action.type === SET_USER_PROFILE_STATUS){ 
      let stateCopy ={...state};
      stateCopy.status = action.profile_statusAC;
      return stateCopy;
    }
    return state;
};

export const addPostActionCreator = (newPost) => {
   return {
     type:ADD_POST,
     newPost:newPost
   }
 };
 
export const setUserProfileAC = (profileFromAxios) => {
   return {
     type:SET_USER_PROFILE,
     profileAC:profileFromAxios
   }
 };
 export const setUserProfileStatusAC = (statusFromAxios) => {
  return {
    type:SET_USER_PROFILE_STATUS,
    profile_statusAC:statusFromAxios
  }
};


export const getProfile = (userId) => {
  return (dispatch)=>{
    getUserProfile(userId)
    .then(response =>{
      dispatch(setUserProfileAC(response))
    });
  }
}

export const getProfileStatus = (userID) =>{
  return (dispatch) =>{
    getUserStatus(userID)
    .then(response =>{
      dispatch(setUserProfileStatusAC(response))
    });
  }
}

export const updateProfileStatus = (newStatus, userID) =>{
  return (dispatch) =>{
    updateUserStatus(newStatus, userID)
    .then(response =>{
      dispatch(setUserProfileStatusAC(response))
    })    
    
  }
}


export default profileReducer;