import {getUserProfile, 
        getUserStatus, 
        updateUserStatus, 
        updateUserProfile} from '../../api/api'

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_PROFILE_STATUS = 'SET_USER_PROFILE_STATUS';
const EDIT_MODE = 'EDIT_MODE';


let initialState= {
   posts: [
      {id:1, message:'Hi it is some test!', likesCount: '5'},
      {id:2, message:'Hi it is some test, second try!', likesCount: '7'},
   ],
   profile: {},
   status: 'status here',
   editMode: false,
};

const profileReducer = (state=initialState, action) => {

   if (action.type === ADD_POST){
      let newPost = {
         id:5, 
         message: action.newPost, 
         likesCount: '0'
       };
       let stateCopy = {...state};
       stateCopy.posts = [...state.posts];
       stateCopy.posts.push(newPost);
       stateCopy.newPostText ='';
       return stateCopy;
    }else if (action.type === SET_USER_PROFILE){ 
      let stateCopy = {...state};
      stateCopy.profile = action.profileAC;
      return stateCopy;
    }else if (action.type === SET_USER_PROFILE_STATUS){ 
      let stateCopy = {...state};
      stateCopy.status = action.profile_statusAC;
      return stateCopy;
    }else if (action.type === EDIT_MODE){ 
      let stateCopy = {...state};
      stateCopy.editMode = action.editMode;
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

 export const switchEditModeAC = (switching) => {
  return {
    type:EDIT_MODE,
    editMode:switching
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


/*export const getProfile = (userId) => {
  return (dispatch)=>{
    getUserProfile(userId)
    .then(response =>{
      dispatch(setUserProfileAC(response))
    });
  }
}*/

export const getProfile = (userId) => async (dispatch)=>{
  try{ 
    let response = await getUserProfile(userId)
      dispatch(setUserProfileAC(response)) 
  } catch(error){
    console.error(error)
  } 
}

export const getProfileStatus = (userID) => async (dispatch)=>{
  try{
      let response = await getUserStatus(userID)    
      dispatch(setUserProfileStatusAC(response)) 
  } catch(error){
    console.error(error)
  }

}

export const updateProfileStatus = (newStatus, userID)  => async (dispatch)=>{
  try{
  let response = await updateUserStatus(newStatus, userID)
    dispatch(setUserProfileStatusAC(response))
  } catch(error){
    console.error(error)
  }
}

export const updateProfileInfo = (updateProfileData, userID)  => async (dispatch)=>{
  try{
  let response = await updateUserProfile(updateProfileData, userID)
    dispatch(setUserProfileAC(response))
  } catch (error){
    console.error(error)
  }
}

export default profileReducer;