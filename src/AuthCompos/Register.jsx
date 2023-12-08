import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import { Button, Container, Grid, TextField, Paper} from "@mui/material";
import { regauth } from "../ReduxItems/AuthSlice";
import { useDispatch } from "react-redux";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});





export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    
    const { name, mobile, email, password } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);
   

   

    dispatch(regauth(formData));

    
  };

  return (
    <div style={{}}>
    <Container style={{}}>
      <h1 style={{textAlign:"center"}}>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft:"120px"}}>
      <Paper elevation={5}  sx={{ padding: 5 }}style={{marginTop:"70px",borderRadius:"15px",marginRight:"120px",border:"1px solid grey"}}>
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
            <TextField label="Phone" fullWidth {...register("mobile", { required: true })} error={!!errors.mobile} helperText={errors.mobile && "Phone number is required"} />
          </Grid>
          
          <Grid item sm={6}>
            <TextField
              label="Password"
              fullWidth
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          </Grid>

         
          
          <Grid item sm={12}>
            <Button  style={{borderRadius:"10px",backgroundColor:"blue"}} type="submit" variant="contained" color="error" fullWidth size="large">
              Submit
            </Button>
           
          </Grid>
          <h3 style={{marginLeft:"20px",color:"black",fontWeight:"400"}}>
            Already have an account? 
            
            <Link to='/Login'>
            Login
            </Link>
          </h3>
          
        </Grid>
        </Paper>
      </form>
    </Container>
    </div>
  );
}