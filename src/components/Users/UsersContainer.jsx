import { connect } from 'react-redux';
import Users from './Users';
import {getUsersAmount,getUsersByPage,setCurrentPageAC} from '../redux/users-reducer';


const UsersContainer = (props) => {

  props.getUsersAmount();
  console.log(props.currentPage)
  props.getUsersByPage(props.currentPage,props.pageSize)

 

  return(
  <Users {...props}
    users ={props.users}
    pageSize = {props.pageSize}
    totalUsersCount = {props.totalUsersCount}
    currentPage = {props.currentPage}
  />
  );

}

let mapStateToProps = (state)=>({ 
  users:state.usersPage.users,
  pageSize:state.usersPage.pageSize,
  totalUsersCount:state.usersPage.totalUsersCount,
  currentPage:state.usersPage.currentPage,
});


export default connect(mapStateToProps,{getUsersAmount,
                                        getUsersByPage,
                                        setCurrentPageAC,
                                        }) (UsersContainer);
