import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";





export const team = createAsyncThunk(
    "/team",
    async()=>{
        let response = await axiosInstance.get(`/team`);
        let resData = response?.data;
        return resData;
    }
)

export const TeamSlice = createSlice({
    name:"TeamSlice",
    initialState:{
        teams:[{}]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(team.pending, (state,action)=>{
            state.staus ="loading"
        })
        .addCase(team.fulfilled, (state,{payload})=>{
            state.status= "idle";
            state.teams= payload.TeamMember;
            
        })
        .addCase(team.rejected, (state,action)=>{
            state.status= "rejected"
        })
    }
})

export default TeamSlice;