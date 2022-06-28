import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom"

const ProfileStatusHooks = (props) => {
  
  let { userId } = useParams();
  let [editMode, setEditMode]= useState(false);
  let [status, setStatus]= useState(props.status);   //деструктуризация

  useEffect(()=>{
    setStatus(props.status)
  }, [props.status]);

  let activateEditMode = () =>{
    setEditMode(true)
  }

  let deActivateEditMode = () => {
    setEditMode(false)
    props.updateProfileStatus(status, userId);
  }
 
  const onStatusChange = (e) =>{
    setStatus(e.currentTarget.value);
  }

     return(  
    <p className="lead">
      {!editMode &&              
          <span onDoubleClick={activateEditMode}>{props.status}</span>                 
      }
      {editMode&&       
          <input autoFocus={true} onBlur = {deActivateEditMode} onChange={onStatusChange} value={status}/>                    
      }
    </p>   
   );
}

export default ProfileStatusHooks;



