import React from "react";

import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { logauth } from "../ReduxItems/AuthSlice";
import {  useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  



  const submit = (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    }
    
    dispatch(logauth(formData));
   
  };
  const se = useSelector((state)=>state.Auth)
  console.log(se);
  let authtoken = localStorage.getItem("token");
  console.log(authtoken);
  if (authtoken !== null && authtoken !== undefined && authtoken !== "") {
     
toast.success("You are logged in")
navigate("/");
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
  </div>
  </>

)
    navigate("/")
   
 }
 
 else{
  return (
    <Container style={{ height: "700px", }}>
        <h1 style={{textAlign:"center"}}>
            Login to access Member Only features - Blogs and Courses
        </h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={6}  sx={{ padding: 2 }} style={{marginTop:"80px",borderRadius:"20px",border:"1px solid grey"}}>
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
    </Container>
  );

 }
    
   

 
}