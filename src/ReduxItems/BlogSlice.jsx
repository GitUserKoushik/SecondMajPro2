import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
// import { toast } from "react-toastify";
// import axios from "axios";


export const blogs = createAsyncThunk(
"allBlog",
async ()=>{
    console.log("blogsssssss");
    let res = await axiosInstance.get("/allBlog");
   
    // console.log(response);
    let respData = res?.data;
    return respData;
})


export const BlogSlice = createSlice({
name:"BlogSlice",
initialState:{
    items:[{}]
},
reducers:{},
extraReducers:(builder)=>{
    builder
    .addCase(blogs.pending, (state,action)=>{
        state.status = "loading";
        console.log("loading");
    })
    .addCase(blogs.fulfilled, (state,{payload})=>{
        state.status = "idle";
        console.log("idle");
        // toast.success("Blogs fetched successfully")
        state.items = payload.data;
        console.log(payload.data);
        console.log("finishing");
    })
    .addCase(blogs.rejected, (state,action)=>{
        state.status = "loading";
        console.log("rejected");
    })
}


});

export default BlogSlice;