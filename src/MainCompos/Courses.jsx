import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { course } from '../ReduxItems/CourseSlice'
import { Grid,Paper } from '@mui/material';
import { Link } from 'react-router-dom'

export default function Courses() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(course());
  },[dispatch]);

const {items} = useSelector((state)=>state?.Course);
  
  return (
    <>
    <h1 style={{marginTop:"100px"}}>
      Welcome to our premium Courses
    </h1>
    <Grid style={{marginBottom:"100px",marginTop:"100px"}} container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      
      {Array.isArray(items)&& items?.map((elems)=>{
        return(
          <Grid item xs={2} sm={4} md={4}>
            <Paper elevation={12} sx={{ padding: 2 }} style={{height:"390px",marginLeft:"40px",width:"320px",backgroundColor:"#fff0d4",borderRadius:"20px",border:"5px solid #ffba39",marginBottom:"50px"}}>
              <img style={{height:"100px",width:"120px",borderRadius:"15px"}} src="https://restapinodejs.onrender.com/api/course/photo/649ad864eac9521c7ef293dd" alt="" />
              <h1>
                {(elems.name)}
              </h1>
              <h3 style={{color:"black",textAlign:"center"}}>
                Requirements: {elems.requirement}
              </h3>
              <h4>
                Duration: {elems.duration}
                <br />
                Fees: {elems.fees}
               
              </h4>
              <button style={{height:"40px",width:"140px",backgroundColor:"blue",border:"1px solid blue",borderRadius:"10px"}}>
                <Link style={{textDecoration:"none",color:"white",fontSize:"20px"}} to={`/ApplyCourse/${elems?._id}`}>

                APPLY
                </Link>
              </button>

            </Paper>

          </Grid>
        )
      })}

    </Grid>
    </>
  )
}
