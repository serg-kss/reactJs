import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import {getPosts,newPostText} from '../../../utils/selectors/selectors'


let mapStateToProps = (state)=>{
   return{
      posts: getPosts(state),
      newPostText: newPostText(state)
   }
 };

 let mapDispatchToProps = (dispatch)=>{
   return{
     addPost: (newPost)=>{
      dispatch(addPostActionCreator(newPost));
     },
     
   }
 };
 
 const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer



