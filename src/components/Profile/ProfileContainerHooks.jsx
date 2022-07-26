import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfile} from '../redux/profile-reducer';
import {getProfileStatus,updateProfileStatus,switchEditModeAC,updateProfileInfo} from '../redux/profile-reducer';
import { useParams} from "react-router-dom";
import {useEffect} from 'react';


const ProfileContainerHooks = (props)=>{

   let  { userId } = useParams();

   useEffect(()=>{
    props.getProfileStatus(userId);
    props.getProfile(userId);
   }, [userId]);
   
   
   return(
    <div>
      <Profile {...props} 
        profile={props.profile} 
        status = {props.status}
        updateProfileStatus ={props.updateProfileStatus}
        switchEditMode = {props.switchEditModeAC}
        editMode = {props.editMode}
        updateProfileInfo = {props.updateProfileInfo}
      />     
    </div>
   );  
};

let mapStateToProps = (state)=>({ 
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    editMode: state.profilePage.editMode,
});

export default connect(mapStateToProps,{getProfile,getProfileStatus,updateProfileStatus,switchEditModeAC,updateProfileInfo}) (ProfileContainerHooks);
 


