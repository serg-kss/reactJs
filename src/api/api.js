import * as axios from 'axios';


export const getUsers = (currentPage=1,pageSize=3)=>{
   return axios.get('https://react-back-end-djangorest.herokuapp.com/api/v1/react/users?page='+currentPage+'&count='+pageSize)
   .then(response =>{
      return response.data
   });
}

export const getAmountUsers = ()=>{
   return axios.get('https://react-back-end-djangorest.herokuapp.com/api/v1/react/amount')
   .then(response =>{
      return response.data.amount_of_users
   });
}


export const getUserProfile = (userId=1)=>{
   return axios.get('https://react-back-end-djangorest.herokuapp.com/api/v1/react/byuserid/'+userId)
   .then(response =>{
      return response.data
   });
}

export const getUserStatus = (userId=1) => {
   return axios.get('https://react-back-end-djangorest.herokuapp.com/api/v1/learning/learn/?id='+userId)
   .then(response =>{
      return response.data.status
   });
}

export const updateUserStatus = (new_status, userId=1) => {
   return axios.put('https://react-back-end-djangorest.herokuapp.com/api/v1/learning/learn/?id='+userId, {status: new_status})
   .then(response =>{
      return response.data.status
   });
}

export const updateUserProfile = (new_profile, userId=1) => {
   return axios.put('https://react-back-end-djangorest.herokuapp.com/api/v1/learning/update/profile/?id='+userId, {
      id: new_profile.id,
      name: new_profile.name,
      surname: new_profile.surname,
      birth_data: new_profile.birth_data,
      email: new_profile.email,
      status: new_profile.status,
      city: new_profile.city,
      job: new_profile.job,
      sex: new_profile.sex,
      relationship: new_profile.relationship,
      hobby: new_profile.hobby})
   .then(response =>{
      return response.data
   });
}



