import {createSelector} from "reselect"

export const getPosts = (state) => {
   // простой селектор
   return state.profilePage.posts;
}

//--------------------------------------------------------------//

 const newPostTextSelector = (state) => {
   // простой селектор
   return state.profilePage.newPostText
}

// селектор для сложных задач через библиотеку реселект
export const newPostText = createSelector( newPostTextSelector,
   (newPostText) =>{
      return newPostText + "!"
   }
)