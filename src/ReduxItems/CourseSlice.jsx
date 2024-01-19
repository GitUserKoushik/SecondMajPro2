import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { toast } from "react-toastify";




export const course = createAsyncThunk(
    "/course",
    async ()=>{
        let res = await axiosInstance.get(`/course`);
        let resData = res?.data;
        return resData;
    }
)




export const CourseSlice = createSlice({
    name:"CourseSlice",
    initialState:{
        items:[{}]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(course.pending, (state,action)=>{
            state.status = "loading";
        })
        .addCase(course.fulfilled, (state,{payload})=>{
            state.status = "idle";
            state.items = payload.Courses;
            // toast.success("Courses fetched successfully")
        })
        .addCase(course.rejected, (state,action)=>{
            state.status ="rejected";
        })

        // .addCase(apply.pending, (state,action)=>{
        //     state.status = "loading";
        //     toast.error = "Error in applying"
        // })
        // .addCase(apply.fulfilled, (state,{payload})=>{
        //     state.status = "idle";
        //    toast.success("Applied for the course")
        //     // state.items = payload.Courses;
        //     // toast.success("Courses fetched successfully")
        // })
        // .addCase(apply.rejected, (state,action)=>{
        //     state.status ="rejected";
        //     toast.error = "Error in applying"
        // })

        
    }
})


export default CourseSlice;