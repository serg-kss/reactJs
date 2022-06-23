import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfile} from '../redux/profile-reducer';
import {getProfileStatus,updateProfileStatus} from '../redux/profile-reducer';
import { useParams} from "react-router-dom";



const ProfileContainerHooks = (props)=>{

   let  { userId } = useParams();
   props.getProfileStatus(userId);
   props.getProfile(userId);
   
   return(
    <div>
      <Profile {...props} profile={props.profile} status = {props.status}
      updateProfileStatus ={props.updateProfileStatus}/>     
    </div>
   );  
};

let mapStateToProps = (state)=>({ 
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default connect(mapStateToProps,{getProfile,getProfileStatus,updateProfileStatus}) (ProfileContainerHooks);
 


