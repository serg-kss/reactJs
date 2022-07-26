import React from 'react';
import c from './ProfileInfo.module.css';
import ProfileStatusHooks from './ProfileStatusHooks';
import avatar from '../../../assets/images/anonymous.jpg';
import {createField, Input, TextArea} from '../../Common/Inputs/FormsControl'
import { Field, reduxForm } from 'redux-form';


const ProfileInfo = (props)=>{

  let editMode = props.editMode;
  
  let switchEditMode = (switching)=>{
    props.switchEditMode(switching)
  }

  const onSubmit = (formData) =>{
   let userID = props.profile.id;
   let extraData = {'id': String(props.profile.id), 'status': props.status};
   let updateProfileData = {...extraData, ...formData};
   props.updateProfileInfo(updateProfileData, userID);
   switchEditMode(false);
  }

   return(
    <div className='container'>
      {!editMode ?
        <ProfileData profile = {props.profile} 
                     status = {props.status} 
                     updateProfileStatus = {props.updateProfileStatus} /> :
        <ProfileEditModeReduxForm 
                     initialValues = {props.profile} 
                     onSubmit = {onSubmit}
                     /> 
      }
           
      <div className='row mt-5'>
        <div className='col-6 text-start'>
          {editMode && <LoadPhoto />}
        </div>
        <div className='col-6 text-end'>
          {!editMode ?
            <button className='btn btn-info' onClick={()=>{
              switchEditMode(true)
            }}><b>Switch to edit mode</b></button>:
            <button className='btn btn-info' onClick={()=>{
              switchEditMode(false)
            }}><b>Switch to static mode</b></button>
          }         
        </div>
      </div>      
    </div> 
   );
}

const ProfileData = (props) => {

  const male = 'male';
  const relationship = 'married';
  const widthAvatar = 300;

  return (
  <div className="row featurette mt-5">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading fw-normal lh-1">{props.profile.name} 
        <span className="text-muted"> {props.profile.surname}</span>
      </h2>

      <ProfileStatusHooks status = {props.status} 
                          updateProfileStatus = {props.updateProfileStatus} />
      <ul>
        <li><b>Birth date: </b>{props.profile.birth_data}</li>
        {props.profile.sex == male ? 
          <li><b>Gender ♂: </b>{props.profile.sex}</li> : 
          <li><b>Gender ♀: </b>{props.profile.sex}</li>
        }

        <li><b>Email: </b>{props.profile.email}</li>
        <li><b>Workplace ＄: </b>{props.profile.job}</li>

        {props.profile.relationship == relationship ? 
          <li><b>Family status ❤: </b>{props.profile.relationship}</li> : 
          <li><b>Family status 💔: </b>{props.profile.relationship}</li>
        }
        <li><b>City: </b>{props.profile.city}</li>
      </ul>

      <h5>Hobbies and a little about myself:</h5>
      <p>{props.profile.hobby}</p>
    </div>
    <div className="col-md-5 order-md-1"> 
      <img src={props.profile.photo === null ? props.profile.photo:avatar} width={widthAvatar}/>               
    </div>
    <hr />
  </div>   
  )
}

const chooseStatus = ['married', 'not sure']

const EditProfileData = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div class="mt-3">
        <h5>Name: </h5> {createField('name', 'name', [], Input)} 
      </div>
      <div class="mt-3">
        <h5>Surname: </h5> {createField('surname', 'surname', [], Input)} 
      </div> 
      <div class="mt-3">
        <h5>Birth date: </h5> <Field name="birth_data" component="input" type="date" className="form-check"/>
      </div>
      <div class="mt-3">         
        <h5>Gender: </h5> 
        <div>
          <label  className="form-check-label" for="check1">
            <Field name="sex" component="input" type="radio" value="male" className="form-check-input" id="check1"/>{' '}
            Male
          </label>
          <label className="form-check-label ms-3" for="check2">
            <Field name="sex" component="input" type="radio" value="female" className="form-check-input" id="check2"/>{' '}
            Female
          </label>
          <label className="form-check-label ms-3" for="check3">
            <Field name="sex" component="input" type="radio" value="other" className="form-check-input" id="check3"/>{' '}
            Other
          </label>
        </div>
      </div>
      <div class="mt-3">
        <h5>Email: </h5> {createField('Email', 'email', [], Input)}
      </div>
      <div class="mt-3">
        <h5>Workplace ＄: </h5>{createField('Workplace', 'job', [], Input)}
      </div> 
      <div class="mt-3">   
        <h5>Family status : </h5> 
        <Field name="relationship" component="select" className="form-select">
          <option value="single">single</option>
            {chooseStatus.map(statusOption => (
              <option value={statusOption} key={statusOption}>
                {statusOption}
              </option>
            ))}
        </Field>
      </div> 
      <div class="mt-3">       
        <h5>City: </h5>{createField('City', 'city', [], Input)}
      </div>
      <div class="mt-3"> 
        <h5>Hobbies: </h5>{createField('Hobbies', 'hobby', [], TextArea)}
      </div>
      <button className='btn btn-warning mt-3'>Send</button>
    </form>   
  )
}

const ProfileEditModeReduxForm = reduxForm({form: 'editprofile'})(EditProfileData)

const LoadPhoto = (props) => {

  const getNewPhoto = (e) => {
    let photo = e.target.files[0]
    //console.log(photo)
    //props.savePhoto(photo)
  }

  return(
    <div>
      <h5>Upload new photo: </h5>
      <input class="form-control" type="file" id="formFile" onChange={getNewPhoto}/>
    </div>
  )
}

export default ProfileInfo



