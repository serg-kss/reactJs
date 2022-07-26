import React from 'react';
import c from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/avatar.png';


class ProfileStatus extends React.Component {
//local state

state = {
  editMode: false,
  status: this.props.status
}

activateEditMode = () => {
  this.setState({
    editMode : true  //асинхронен после всего кода в методе выполняется
  })  
  //this.forceUpdate();//принудительно перерисовать страницу
}

deActivateEditMode = () => {
  this.setState({
    editMode : false  //асинхронен после всего кода в методе выполняется
  })
  this.props.updateProfileStatus(this.state.status);
} 

onStatusChange = (e) =>{
  this.setState({
    status:e.currentTarget.value,
  })
}

componentDidUpdate(prevProps,prevState){
 // if(prevState.status!==this.state.status){
 //   this.setState({
  //    status: this.props.status
  //  });
 // }
  //переристовать компоненту если поменялся локальный или полный стейт
}


   render(){
     return(  
    <div>
      <div>
        {!this.state.editMode &&
          <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
        }       
      </div>
      <div>
        {this.state.editMode &&
          <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} onChange={this.onStatusChange}/>
        }       
      </div>
    </div>   
   );
  }
}

export default ProfileStatus



