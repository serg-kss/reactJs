import { render, screen } from '@testing-library/react';
import profileReducer from '../redux/profile-reducer';
import {addPostActionCreator} from './profile-reducer'

test('new post add', () => {

  let action = addPostActionCreator("KSS")

  let initialState= {
    posts: [
       {id:1, message:'Hi it is some test!', likesCount: '5'},
       {id:2, message:'Hi it is some test, second try!', likesCount: '7'},
    ],
 };

  let newState = profileReducer(initialState,action)

  expect(newState.posts.length).toBe(3)
});