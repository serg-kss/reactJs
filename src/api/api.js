import * as axios from 'axios';


export const getUsers = (currentPage=1,pageSize)=>{
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



