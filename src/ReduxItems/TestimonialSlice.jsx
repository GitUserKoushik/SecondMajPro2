// import React from 'react'
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
// import { toast } from "react-toastify";


//  const initialState={
//     items:[{}]
// }

export const testm = createAsyncThunk(
'/testimonial',

async ()=>{
   let response = await axiosInstance.get(`/testimonial`);
   let resData = response?.data;
  
   return resData;


});


export const Testimonial = createSlice({
name:"Testimonial",
initialState:{
    items:[{}]
},
reducers:{},
extraReducers:(builder)=>{
    builder
    .addCase(testm.pending, (state,action)=>{
        console.log("pending");
        state.status = "Loading";
    })
    .addCase(testm.fulfilled, (state,{payload})=>{
        state.status= "Fulfilled";
        console.log("success");
        state.items = payload.testimonials;
    })
    .addCase(testm.rejected, (state,action)=>{
        console.log("rejected");
        state.status= "Rejected";
    })
   
}




})
export default Testimonial;
