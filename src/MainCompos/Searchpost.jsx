import React, { useState } from 'react'
import { TextField } from '@mui/material'
// import axios from 'axios';
import {Paper} from '@mui/material';
import NavBar from './NavBar';

export default function Searchpost() {
const [txt,setTxt]= useState("");
const [data,setData] = useState([]);

const txtoc = (e)=>{
setTxt(e.target.value)
}

const search =(txtarg)=>{
    txtarg = txt;
    fetch(`https://restapinodejs.onrender.com/api/search/${txtarg}`).then((datas)=>datas.json()).then((elems)=>setData(elems));

}

  return (
    <div>
      <NavBar/>
      <div style={{display:"flex",marginTop:"50px",justifyContent:"center",columnGap:"10px"}}>
        <TextField style={{width:"55%",borderRadius:"95px"}} value={txt} onChange={txtoc} label="Search your topic here">

        </TextField>
        <button onClick={search} style={{backgroundColor:"black",color:"white",borderRadius:"10px",width:"130px",fontSize:"20px"}}>
            Search
        </button>
      </div>

      <h2>
        Suggested words - JavaScript, Python, Node, MongoDB, Variables, DOM etc
      </h2>

     
      
<div>
    {Array.isArray(data)&& data?.map((elems,index)=>{
        return(
            <>
              <Paper elevation={10} sx={{ padding: 2 }} style={{marginTop:"150px",marginBottom:"100px",width:"90%",marginLeft:"50px",borderRadius:"20px",border:"1px solid grey"}}>
           
           <h1 key={index} style={{color:"blue"}}>
             {elems.title}
           </h1>
           <img style={{height:"150px",width:"220px",borderRadius:"25px"}} src={`https://restapinodejs.onrender.com/api/blog/image/${elems._id}`} alt="" />   
           <p  dangerouslySetInnerHTML={{
                 __html: elems.postText,
               }}>
             
           </p>
           </Paper>
            
            
            
            </>
        )
    })}
</div>


    </div>
  )
}
