import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export const regauth = createAsyncThunk(
    "/register",

    async (details)=>{
     let response = await axiosInstance.post("/register",details);
     let resData = response?.data;

     return resData;
    }
);

export const logauth = createAsyncThunk(
    "/login",

    async (details)=>{
     let response = await axiosInstance.post("/login",details);
     let resData = response?.data;

     return resData;
    }
);

export const AuthSlice = createSlice(
   
    {
        name:"AuthSlice",
        initialState:{},
        reducers:{
            
        },



        extraReducers:(builders)=>{
builders
.addCase(logauth.pending,(state,action)=>{
    // state.status = "pending";
    console.log("pending");
} )
.addCase(logauth.fulfilled, (state,{payload})=>{
    toast.success("Login successfull")
    // state.status = "idle";
    console.log("success");

    if(payload.token){

        localStorage.setItem("token",payload.token);
        window.location.reload();
        
        // toast.success("Login successful")
    }
    else{
        alert("Login failed");
    }

})
.addCase(logauth.rejected, (state,action)=>{
    // state.status = "rejected";
})


        }

    })


export default AuthSlice;
