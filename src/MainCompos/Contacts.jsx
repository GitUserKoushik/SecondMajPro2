import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import mail from '../Images/maillogo.png';
import phone from '../Images/phone.png';
import wapp from '../Images/wap.png';
import Footer from './Footer';
import { Button,  Grid, TextField, Paper} from "@mui/material";
import  contacts  from '../ReduxItems/AuthSlice';
import Navbar from './NavBar'
import axios from 'axios';
import { toast } from 'react-toastify';



export default function Contacts() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatchh = useDispatch();

  async function Submit (data) {
    let axurl = "https://restapinodejs.onrender.com/api/contact/create";
    console.log("Running");
    
    const { name, phone, email, message } = data;
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("phone", phone);
    // formData.append("message", message);
    const formData = {
      name:name,
      email:email,
      phone:phone,
      message:message,
    }
    const response = await axios.post(axurl,formData);
    console.log(response);
    toast.success("Message sent successfully")

  //  dispatchh(contacts(formData));

    
  };





  return (
    <div>
     <Navbar/>
      <h2>
      Want to be connected with us?
      <br />
      Feel free to Contact
      </h2>
      
      <div style={{display:"flex",height:"280px",justifyContent:"space-around",alignContent:"center"}}>
       
        <div style={{marginBottom:"230px",}}>
        <img src={phone} style={{height:"120px",width:"120px",marginBottom:"0px",marginTop:"10px"}} alt="" />
          <h4 >
          By Phone 
          <br />
          Our Contact Number
          <br /> 1234567890
          </h4>
        </div>


        <div style={{marginTop:"30px"}}>
<img src={mail} style={{height:"70px",width:"150px",marginBottom:"20px"}} alt="" />
        <h4>
          By Mail 
          <br />
          Our Email ID 
          <br />
          random1234@random.com
        </h4>
        </div>


        <div style={{marginTop:"30px"}}>
          <img src={wapp} style={{height:"80px",width:"80px",marginBottom:"20px"}}  alt="" />
        <h4>
          By Whatsapp 
          <br />
          Our Whatsapp Number
          <br />
          9999999999
        </h4>
        </div>



      </div>
      <div>
      <form onSubmit={handleSubmit(Submit)} style={{marginLeft:"120px"}}>
      <Paper elevation={5}  sx={{ padding: 5 }}style={{borderRadius:"15px",marginRight:"120px",border:"1px solid grey"}}>
        <Grid container maxWidth={1100} spacing={2}>
        
        <Grid item sm={6}>
            <TextField
              label="Name"
              fullWidth
              {...register("name", { required: true, minLength: 3 })}
              error={!!errors.name}
              helperText={errors.name?.type === "required" ? "First name is required" : errors.name?.type === "minLength" ? "Minimum 3 characters are required" : ""}
            />
          </Grid>
         
          
          <Grid item sm={6}>
            <TextField
              label="Email"
              fullWidth
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              error={!!errors.email}
              helperText={errors.email?.type === "required" ? "Email is required" : errors.email?.type === "pattern" ? "Valid email is required" : ""}
            />
          </Grid>

          <Grid item sm={6}>
            <TextField label="Phone" fullWidth {...register("phone", { required: true })} error={!!errors.phone} helperText={errors.phone && "Phone number is required"} />
          </Grid>
          
          <Grid item sm={6}>
            <TextField
              label="Message"
              fullWidth
              {...register("message", {
                required: "Message is required",
               
               
              })}
              error={!!errors.message}
              helperText={errors.message ? errors.message.message : ""}
            />
          </Grid>

         
          
          <Grid item sm={12}>
            <Button  style={{borderRadius:"10px",backgroundColor:"blue"}} type="submit" variant="contained" color="error" fullWidth size="large">
              Submit
            </Button>
           
          </Grid>
          
          
        </Grid>
        </Paper>
      </form>
      </div>
      <Footer/>

    </div>
  )
}
