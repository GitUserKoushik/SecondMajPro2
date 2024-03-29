import React  from 'react'
import { crtcmnt } from '../ReduxItems/CommentSlice'
import { useDispatch,} from 'react-redux'
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom'
import {
    
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import { useForm } from "react-hook-form";
import NavBar from './NavBar';
  // import { toast } from "react-toastify";


export default function CommnetCrt() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const dispatch = useDispatch();




const submit = (data) => {
    const formData = {
        name:data.name,
      email: data.email,
      comment: data.comment,
    }
    
    dispatch(crtcmnt(formData));
   
  };


 


  return (
    <div>
      <NavBar/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={6}  sx={{ padding: 2 }} style={{marginTop:"80px",borderRadius:"20px",border:"1px solid grey"}}>
            <Typography variant="h5" gutterBottom>
              Leave your comment here
            </Typography>
            <form onSubmit={handleSubmit(submit)} action="/">

            <TextField
                {...register("name", {required:true, })}
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.name}
                helperText={(errors.name && errors.name.type === "required"  && "Email is required") ||  (errors.name && errors.name.type === "pattern" &&"Valid email is required" )}
               
              />
             
             
              <TextField
                {...register("email", {required:true, })}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={(errors.email && errors.email.type === "required"  && "Email is required") ||  (errors.email && errors.email.type === "pattern" &&"Valid email is required" )}
               
              />
                
              <TextField
                {...register("comment", {required:true})}
                label="Comment"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.comment}
                helperText={(errors.comment) && "Password is required"}
              />
              

              <Button
              style={{borderRadius:"15px",backgroundColor:"blue"}}
                variant="contained"
                
                fullWidth
                size="large"
                type="submit"
                
                sx={{ marginTop: 2 }}
              >
                Submit comment
              </Button>
             
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
