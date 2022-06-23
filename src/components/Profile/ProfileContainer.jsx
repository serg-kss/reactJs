import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getProfile} from '../redux/profile-reducer';
import {getProfileStatus,updateProfileStatus} from '../redux/profile-reducer';


class ProfileContainer extends React.Component{


  componentDidMount() {
   this.props.getProfileStatus();
   this.props.getProfile();       
  }

 
  render(){ 
   return(
    <div>
      <Profile {...this.props} profile={this.props.profile} status = {this.props.status}
      updateProfileStatus ={this.props.updateProfileStatus}/>     
    </div>
   );
  };  
};

let mapStateToProps = (state)=>({ 
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});


//let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps,{getProfile,getProfileStatus,updateProfileStatus}) (ProfileContainer);
 


