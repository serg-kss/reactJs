import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setLoginData} from '../redux/auth-reducer';


class HeaderComponent extends React.Component{

   componentDidMount(){
    //  axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{
     //    withCredentials:true
     // })
    //  .then(response =>{
     //    if(response.data.resultCode===0){
     //       this.props.setLoginData(               
     //          response.data.data.id,
     //          response.data.data.email,
      //         response.data.data.login,
      //         );
      //   }
    //  });
   }

render() {
   return <Header {...this.props}/> 
   };
};

let mapStateToProps = (state)=>({ 
   isAuth:state.auth.isAuth,
   login:state.auth.login,

});
export default connect(mapStateToProps,{setLoginData})( HeaderComponent);



