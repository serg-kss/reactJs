import React from 'react';
import c from './ProfileInfo.module.css';
import ProfileStatusHooks from './ProfileStatusHooks';
import avatar from '../../../assets/images/anonymous.jpg'


const ProfileInfo = (props)=>{

const male = 'male';
const relationship = 'married';

   return(   
    <div className="row featurette mt-5">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading fw-normal lh-1">{props.profile.name} <span class="text-muted">{props.profile.surname}</span></h2>
      <ProfileStatusHooks status={props.status} updateProfileStatus={props.updateProfileStatus} />
      <ul>
        <li>Birth date: {props.profile.birth_data}</li>
        {props.profile.sex == male ? 
            <li>Gender ♂: {props.profile.sex}</li> : 
            <li>Gender ♀: {props.profile.sex}</li>
          }
        <li>Email: {props.profile.email}</li>
        <li>Workplace ＄: {props.profile.job}</li>
        {props.profile.relationship == relationship ? 
          <li>Family status ❤: {props.profile.relationship}</li> : 
          <li>Family status 💔: {props.profile.relationship}</li>
          }
        <li>City: {props.profile.city}</li>
      </ul>
      <h5>Hobbies and a little about myself:</h5>
      <p>{props.profile.hobby}</p>
    </div>
    <div className="col-md-5 order-md-1"> 
        <img src={props.profile.photo == null? props.profile.photo:avatar} width={300}/>                 
    </div>
    <hr />
  </div>       
   );
}

export default ProfileInfo



