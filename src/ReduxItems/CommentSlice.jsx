import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";





export const crtcmnt = createAsyncThunk(
    "/blog/649d61049e8a8a3931e537ab/comment/create",
    async(formData)=>{
        let response = await axiosInstance.post(`/blog/649d61049e8a8a3931e537ab/comment/create`,formData);
        let resData = response?.data;
        return resData;
    }
)

export const CommentSlice = createSlice({
    name:"CommentSlice",
    initialState:{
        items:{}
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(crtcmnt.pending, (state,action)=>{
            state.status="loading"
        })
        .addCase(crtcmnt.fulfilled, (state,action)=>{
            state.status="idle";
            state.items=action.payload;
            toast.success("Comment created successfully");
            // window.location.reload();
        })
        .addCase(crtcmnt.rejected, (state,action)=>{
            state.status = "rejected";
        })
    }
})

export default CommentSlice;