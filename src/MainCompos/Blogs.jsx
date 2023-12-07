import React, { useEffect } from 'react'
import { blogs } from '../ReduxItems/BlogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom'


export default function Blogs() {
const dispatch = useDispatch();


useEffect(()=>{
  dispatch(blogs());
},[]);

// console.log(blogs);

const {items}= useSelector((state)=>state.Blogss);
console.log("fetching blogs");
// console.log(blogItems);






  return (
    <div style={{marginBottom:"100px"}}>
      <h1>
      Read our most informative Blogs
      </h1>

      <h2>
        You can search your topic in our Blogs
      </h2>
      <button style={{backgroundColor:"blue",border:"2px solid blue",paddingRight:"35px",paddingLeft:"35px",paddingTop:"10px",paddingBottom:"10px",fontSize:"25px",borderRadius:"15px"}}>
        <Link style={{backgroundColor:"blue",textDecoration:"none",color:"white",}} to='/Searchpost'>
        Search
        </Link>
      </button>

      { items?.map((elements,index)=>{
        console.log("inside");
        return(
          <Paper elevation={10} sx={{ padding: 2 }} style={{marginTop:"150px",width:"90%",marginLeft:"50px",borderRadius:"20px",border:"1px solid grey"}}>
           
          <h1 key={index} style={{color:"blue"}}>
            {elements.title}
          </h1>
          <p  dangerouslySetInnerHTML={{
                __html: elements.postText,
              }}>
            
          </p>
          </Paper>
        )


      })}
    </div>
  )
}
