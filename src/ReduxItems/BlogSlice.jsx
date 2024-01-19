import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";
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

export const search = createAsyncThunk(
"/search",
async (txt)=>{
    let response = await axiosInstance.get(`/search/${txt}`);
    let resData = response?.data;
    return resData;
}

)



export const BlogSlice = createSlice({
name:"BlogSlice",
initialState:{
    items:[{}],
    searchItems:[{}],
   
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
    .addCase(search.pending, (state,action)=>{
        console.log("Pending");
    })
    .addCase(search.fulfilled, (state,{payload})=>{
        // state.toggle = true;
        state.searchItems = payload.data;
        toast.success("Fetched successfully")

    })
    .addCase(search.rejected, (state,action)=>{
        console.log("Rejected");
        toast.error("Topic unavailable")
    })
}


});

export default BlogSlice;