import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props)=>{
 
   return(
    <div className='container'>
      <ProfileInfo  profile={props.profile} 
                    status={props.status} 
                    updateProfileStatus={props.updateProfileStatus}
                    switchEditMode = {props.switchEditMode}
                    editMode = {props.editMode}
                    updateProfileInfo = {props.updateProfileInfo}
                    />
      <hr />
      <MyPostsContainer />
    </div>
   );
}

export default Profile



