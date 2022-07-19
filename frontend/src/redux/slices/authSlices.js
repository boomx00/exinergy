import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {email:null,name: null, phone_number: null, user_id: null},
  reducers:{
    setCredentials: (state,action)=>{
        state.name = action.payload.name
        state.email = action.payload.email
        state.phone_number = action.payload.phone_number
        state.user_id = action.payload.user_id

    }
  }
})


export const {setCredentials} = authSlice.actions

export const loginUser = (data)=>{
  return async dispatch =>{
    try{
      // console.log(data)
      const res = await axios.post("/user/login",{
        email: data.email,
        password: data.password
      })

      if(res.status== 201){
        localStorage.setItem('access_token', res.data.token)
        const getOwnUser = await dispatch(personalUser(res.data.user_id))
        if(getOwnUser == 201){
          return "LOGIN_SUCCESS"
        }
      }
  }catch(err){

  }
  }
}

export const personalUser = (user_id)=>{
  return async dispatch =>{
    try{
      const res = await axios.get("/user/get-own-user")
      if(res.status==201){
        dispatch(setCredentials(res.data.message))
        return "201";
      }else{
        return "404";
      }
     
  }catch(err){

  }
  }
}

export const checkToken = ()=>{
  return async dispatch=>{
    try{
      const res = await axios.post("token/check")

    }catch(err){
       return(err.response.status)
    }

  }
}