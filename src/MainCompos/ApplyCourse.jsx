import React from 'react'
import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { apply } from '../ReduxItems/CourseSlice'
import { useDispatch } from 'react-redux'
import { Button, Container, Grid, TextField, Paper} from "@mui/material";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { styled } from '@mui/material/styles';
// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

export default function ApplyCourse() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const dispatch = useDispatch();

 

    const { id } = useParams();
    
    // const Loginacc = (data)=>{
    //   const formData = {
    //     name: data.name,
    //     email: data.email,
    //     phone:data.phone,
    //     city:data.city,
    //     address:data.address,
    //     qualification:data.qualification,
    //     programing_knowledge:data.programing_knowledge,
    //     experiance:data.experiance,

    //   }
    //   dispatch(apply(formData));
    // }

    const Loginacc = (data)=>{
      let formData = new FormData();
      formData.append("name",data.name);
      formData.append("email",data.email);
      formData.append("phone",data.phone);
      formData.append("city",data.city);
      formData.append("address",data.address);
      formData.append("qualification",data.qualification);
      formData.append("programing_knowledge",data.programing_knowledge);
      formData.append("experiance",data.experiance);
      // formData.append("id",id)

      dispatch(apply(formData,id));

    }



  return (
    <div style={{}}>
    <Container style={{}}>
      <h1 style={{textAlign:"center"}}>Apply For Course</h1>
      <form onSubmit={handleSubmit(Loginacc)} style={{marginLeft:"120px"}}>
      <Paper elevation={5}   sx={{ padding: 5 }}style={{marginTop:"80px",marginBottom:"200px",marginRight:"130px",border:"1px solid grey",borderRadius:"15px"}}>
        <Grid container maxWidth={1100} spacing={2}>
            
        
        <Grid item sm={6}  style={{borderRadius:"25px"}}>
            <TextField
            style={{[`& fieldset`]:{borderRadius:30}}}
            // style={{borderRadius:"15px",border:"1px solid black",height:"50px",width:"92%",paddingLeft:"30px"}}
            // placeholder='Name'
            label="Name"
            fullWidth
        //   style={{borderRadius:"15px",border:"2px solid black",}}
              
              {...register("name", { required: true, minLength: 3 })}
              error={!!errors.name}
              helperText={errors.name?.type === "required" ? "Name is required" : errors.name?.type === "minLength" ? "Minimum 3 characters are required" : ""}
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
              label="City"
              fullWidth
              {...register("city", {
                required: "city is required",
               
                
              })}
              error={!!errors.city}
              helperText={errors.city ? errors.city.message : ""}
            />
          </Grid>
            
          <Grid item sm={6}>
            <TextField
              label="Address"
              fullWidth
              {...register("address", { required: true, })}
              error={!!errors.address}
              helperText={errors.address?.type === "required" ? "Address is required" : ""}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Qualification"
              fullWidth
              {...register("qualification", { required: true, })}
              error={!!errors.qualification}
              helperText={errors.qualification?.type === "required" ? "Address is required" : ""}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Programming Knowledge"
              fullWidth
              {...register("programing_knowledge", { required: true, })}
              error={!!errors.programing_knowledge}
              helperText={errors.programing_knowledge?.type === "required" ? "Address is required" : ""}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Experience"
              fullWidth
              {...register("experiance", { required: true, })}
              error={!!errors.experiance}
              helperText={errors.experiance?.type === "required" ? "Address is required" : ""}
            />
          </Grid>

         
          
          <Grid item sm={12}>
            <Button  style={{borderRadius:"10px",backgroundColor:"blue"}} type="submit" variant="contained"  fullWidth size="large">
              Submit
            </Button>
           
          </Grid>
         
        </Grid>
        </Paper>
      </form>
    </Container>
    </div>
  )
}
