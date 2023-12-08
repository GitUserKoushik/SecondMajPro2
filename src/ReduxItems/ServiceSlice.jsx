import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";




export const service = createAsyncThunk(
   "/service",
   async ()=>{
    let response = await axiosInstance.get(`/service`)
    let resData = response?.data;
    return resData;
   });


   export const ServiceSlice = createSlice({
    name:"ServiceSlice",
    initialState:{
        serves:[{}]
    },
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(service.pending, (state,action)=>{
            state.status ="loading";
        })
        .addCase(service.fulfilled, (state,{payload})=>{
            state.status = "fulfilled";
            state.serves = payload.data;
        })
        .addCase(service.rejected, (state,action)=>{
            state.status = "rejected";
        })
    }


   })

   export default ServiceSlice;