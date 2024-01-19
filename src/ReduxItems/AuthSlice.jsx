import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";
import { Navigate, redirect, useNavigate } from "react-router-dom";



const initialState = {
    token:""
}

export const regauth = createAsyncThunk(
    "/register",

    async (details)=>{
     let response = await axiosInstance.post("/register",details);
     let resData = response?.data;
     console.log(resData);

     return resData;
    }
);

export const logauth = createAsyncThunk(
    "/login",

    async (details)=>{
     let response = await axiosInstance.post("/login",details);
     let resData = response?.data;
     console.log(resData);
     return resData;
    }
);

export const contacts = createAsyncThunk(
    "/contact/create",
    
    async (formData)=>{
    let response = await axiosInstance.post("/contact/create",formData);
    let resData = response?.data;
    return resData;
    
    }
    );


    export const ConSlice = createSlice(
        {
        name:"ConSlice",
        initialState,
        reducers:{},
    
        extraReducers:(builders)=>{
            builders
            .addCase(contacts.pending, (state,acttion)=>{
                console.log("Pending");
                
            })
            .addCase(contacts.fulfilled,(state,{payload})=>{
                toast.success("We will get back to you");
                state.response= payload.data;
            })
            .addCase(contacts.rejected,(state, action)=>{
                console.log("Rejected");
                
            })
        }
    });

export const AuthSlice = createSlice(
 
   
    {
        name:"AuthSlice",
        initialState,
        reducers:{
            
        },



        extraReducers:(builders)=>{
builders
.addCase(regauth.pending,(state,action)=>{
    console.log("pending");
})
.addCase(regauth.fulfilled, (state,{payload})=>{
    toast.success("Registered Successfully");
})
.addCase(regauth.rejected, (state,action)=>{
console.log("rejected");
})

.addCase(logauth.pending,(state,action)=>{
    // state.status = "pending";
    console.log("pending");
} )
.addCase(logauth.fulfilled, (state,{payload})=>{
    toast.success("Login successfull")
    // state.status = "idle";
    console.log("success");

    if(payload.token){
        // const navigatee = useNavigate();

        localStorage.setItem("token",payload.token);
        state.token = payload.token;
        // window.location.replace("/");
        // alert("Login Successfull")
        redirect('/');
        // navigatee('/');
        // Navigate('/')
        
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
// export ConSlice;
