import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";




export const course = createAsyncThunk(
    "/course",
    async ()=>{
        let res = await axiosInstance.get(`/course`);
        let resData = res?.data;
        return resData;
    }
)

export const apply = createAsyncThunk(
    "/course/apply/",
    async(formData,id)=>{
        let response = await axiosInstance.post(`/course/apply/${id}`,formData);
        let resData = response?.data;
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
        .addCase(apply.pending, (state,action)=>{
            state.status = "loading";
        })
        .addCase(apply.fulfilled, (state,{payload})=>{
            state.status = "idle";
            // state.items = payload.Courses;
            // toast.success("Courses fetched successfully")
        })
        .addCase(apply.rejected, (state,action)=>{
            state.status ="rejected";
        })

        
    }
})


export default CourseSlice;