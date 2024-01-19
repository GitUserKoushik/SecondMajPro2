import React, { useEffect } from 'react'
import { blogs } from '../ReduxItems/BlogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
// import { TextField } from '@mui/material'
// import { useState } from 'react';
// import axios from 'axios';
// import { search } from '../ReduxItems/BlogSlice';


export default function Blogs() {
const dispatch = useDispatch();




// console.log(blogs);

const {items,}= useSelector((state)=>state.Blogss);
// const {toggle} = useSelector((state)=>state.Blogss);
// const {searchItems} = useSelector((state)=>state.Blogss);
console.log("fetching blogs");
// console.log(blogItems);

// const [txt,setTxt]= useState("");
// const [data,setData] = useState([]);
// const [tgl,setTgl] = useState(false);

// const txtoc = (e)=>{
//   setTxt(e.target.value)
//   }

 
  useEffect(()=>{
    dispatch(blogs());
    // setTgl(true);
  },[dispatch]);

  
 


      // await fetch (`https://restapinodejs.onrender.com/api/search/${txtarg}`).then((datas)=>datas.json()).then((elems)=>setData(elems));
      // settrue();
      // console.log(toggle); 

      // fetch(`https://restapinodejs.onrender.com/api/search/${txtarg}`).then((datas)=>datas.json()).then((elems)=>{setData(elems);setToggle(true)});
      // console.log(toggle); 
  
  



  return (
    <>
    <NavBar/>
    <div style={{marginBottom:"100px"}}>
      <h1>
      Read our most informative Blogs
      </h1>

      
      {/* <button style={{backgroundColor:"blue",border:"2px solid blue",paddingRight:"35px",paddingLeft:"35px",paddingTop:"10px",paddingBottom:"10px",fontSize:"25px",borderRadius:"15px"}}>
        <Link style={{backgroundColor:"blue",textDecoration:"none",color:"white",}} to='/Searchpost'>
        Search
        </Link>
      </button> */}

<h2>
        You can search your own topic
      </h2>
      <button style={{backgroundColor:"blue",border:"1px solid blue",color:"white",borderRadius:"10px",height:"50px",width:"130px",fontSize:"25px"}} >
        <Link to='/Searchpost' style={{textDecoration:"none", color:"white"}}>
        Search
        </Link>
       
      </button>

      
      {/* {Array.isArray(searchItems)&& searchItems?.map((elements,index)=>{ 
        console.log("inside");
        
         <Paper elevation={10} sx={{ padding: 2 }} style={{marginTop:"150px",marginBottom:"100px",width:"90%",marginLeft:"50px",borderRadius:"20px",border:"1px solid grey"}}>
           
           <h1 key={index} style={{color:"blue"}}>
             {elements.title}
           </h1>
             <img style={{height:"50px",width:"100px"}} src={`https://restapinodejs.onrender.com/api/blog/image/${elements._id}`} alt="" /> 

           <p  dangerouslySetInnerHTML={{
                 __html: elements.postText,
               }}>
             
           </p>
           </Paper>
})}
        </div>:<div> */}



          { items.map((elems,index)=>{
            return (
              <Paper elevation={10} sx={{ padding: 2 }} style={{marginTop:"150px",width:"90%",marginLeft:"50px",borderRadius:"20px",border:"1px solid grey"}}>
             
              <h1 key={index} style={{color:"blue"}}>
                {elems.title}
              </h1>
              <img style={{height:"150px",width:"220px",borderRadius:"25px"}} src={`https://restapinodejs.onrender.com/api/blog/image/${elems._id}`} alt="" /> 
              <p  dangerouslySetInnerHTML={{
                    __html: elems.postText,
                  }}>
                
              </p>
              </Paper>
            )
          })}
       
        </div>
       


     
    </>
  )
        }    

