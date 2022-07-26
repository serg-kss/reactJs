import { connect } from 'react-redux';
import Users from './Users';
import {getUsersAmount,getUsersByPage} from '../redux/users-reducer';


const UsersContainer = (props) => {

  props.getUsersAmount();
  
  return(
  <Users {...props}
    users = {props.users}
    pageSize = {props.pageSize}
    portionSize = {props.portionSize}
    totalUsersCount = {props.totalUsersCount}
    currentPage = {props.currentPage}
  />
  );

}

let mapStateToProps = (state)=>({ 
  users:state.usersPage.users,
  pageSize:state.usersPage.pageSize,
  portionSize:state.usersPage.portionSize,
  totalUsersCount:state.usersPage.totalUsersCount,
  currentPage:state.usersPage.currentPage,
});


export default connect(mapStateToProps,{getUsersAmount,
                                        getUsersByPage,
                                        }) (UsersContainer);
