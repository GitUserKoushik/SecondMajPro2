import React, { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { logauth } from "../ReduxItems/AuthSlice";
import {  useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'


import {
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import { useForm } from "react-hook-form";
  import { toast } from "react-toastify";




export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigatee = useNavigate();
  



  const submit = (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    }
    
    dispatch(logauth(formData));
   
  };
  const lgout = ()=>{
    localStorage.removeItem("token");
    window.location.replace("Login");
    toast.success("Logout successful")
  }

  const {token} = useSelector((state)=>state.Auth)
  let authtoken = localStorage.getItem("token");
  console.log(authtoken);

  if (token) {

    navigatee('/');
     
// toast.success("You are logged in")
      
return(
  <>
  <h1>
    You are logged in to your account,
    <br />
    Now you can access Blogs and Courses
  </h1>
  <div>
    <button style={{height:"65px",width:"210px",paddingBottom:"6px",border:"3px solid black",borderRadius:"20px",backgroundColor:"black",marginRight:"22px",marginBottom:"0px"}}>
      <Link style={{fontSize:"40px",textDecoration:"none",color:"white",}} to='/Blogs'>
      Blogs
      </Link>
     
    </button>
    <button style={{height:"65px",width:"210px",paddingBottom:"6px",border:"3px solid black",borderRadius:"20px",backgroundColor:"black",marginRight:"22px",marginBottom:"0px"}}>
      <Link style={{fontSize:"40px",textDecoration:"none",color:"white",}} to='/Courses'>
      Courses
      </Link>
    </button>
    <br />
    <h1>
      If you wish to Login to another account, then Logout first
    </h1>
    <button onClick={lgout} style={{height:"65px",color:"white",fontSize:"35px",width:"210px",paddingBottom:"6px",border:"3px solid black",borderRadius:"20px",backgroundColor:"black",marginRight:"22px",marginBottom:"0px"}}>
      Logout
    </button>
  </div>
  </>

)
   
   
 }
 
 else{
  return (
    <>
    <Container style={{ height: "600px", marginBottom:"20px"}}>
        <h1 style={{textAlign:"center"}}>
            Login to access Member Only features - Blogs and Courses
        </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={6}  sx={{ padding: 2 }} style={{marginTop:"80px",marginBottom:"20px",borderRadius:"20px",border:"1px solid grey"}}>
            <Typography variant="h5" gutterBottom>
              Login Form
            </Typography>
            <form onSubmit={handleSubmit(submit)} action="/">
             
             
              <TextField

              className="txtfld"
                {...register("email", {required:true, })}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={(errors.email && errors.email.type === "required"  && "Email is required") ||  (errors.email && errors.email.type === "pattern" &&"Valid email is required" )}
               
              />
                
              <TextField
                {...register("password", {required:true})}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={(errors.password) && "Password is required"}
              />
              

              <Button
              style={{borderRadius:"15px",backgroundColor:"blue"}}
                variant="contained"
                
                fullWidth
                size="large"
                type="submit"
                
                sx={{ marginTop: 2 }}
              >
                Login
              </Button>
              <h3 style={{marginLeft:"20px",color:"black",fontWeight:"400"}}>
            Don't have an account? 
            
            <Link to='/Register'>
            Register
            </Link>
          </h3>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Link style={{fontSize:"30px"}} to="/">
Go to Home
</Link>
    </Container>


    </>
    
  );

  

 }
    
   

 
}
