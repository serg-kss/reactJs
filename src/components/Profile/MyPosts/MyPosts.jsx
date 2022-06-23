import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {required, maxlengthCreator} from '../../../utils/validators/validator';
import {TextArea} from '../../Common/Inputs/FormsControl';

const maxlength10 = maxlengthCreator(10);

const MyPostForm = (props)=>{
  return(
    <form onSubmit={props.handleSubmit}>       
      <Field component={TextArea} name={'myPostText'} placeholder={'Enter your message'} 
        validate={[required,maxlength10]}
      /> 
      <div><button className="btn btn-success mt-3">Add Post</button></div>         
    </form>
  )
}

const MyPostReduxForm = reduxForm({
  // a unique name for the form
  form: 'myPost'
})(MyPostForm);


const MyPosts = (props)=>{

   let postElements = props.posts.map( (el)=>{return <Post message={el.message} likescount={el.likesCount} key={el.id}/>} );

   let onAddPost = (values)=>{
     props.addPost(values.myPostText);
   };
  
   return(   
    <div className={c.posts}>
      <h3>All Posts</h3>
        <MyPostReduxForm onSubmit={onAddPost}/>
      <div className={c.item}>
        {postElements}  
      </div>     
    </div>   
   );
}

export default MyPosts



