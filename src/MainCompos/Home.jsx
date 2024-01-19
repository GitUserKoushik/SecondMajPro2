import React from 'react'
import Codingpic from '../Images/cdpic.jpg'
import { Link } from 'react-router-dom'
// import { Testimonial } from '../ReduxItems/TestimonialSlice'
import { testm } from '../ReduxItems/TestimonialSlice'
import { service } from '../ReduxItems/ServiceSlice'
import { team } from '../ReduxItems/TeamSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Grid,Paper } from '@mui/material'
import { useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'


export default function Home() {
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(testm());
},[dispatch]);

useEffect(()=>{
  dispatch(service());
},[dispatch]);

useEffect(()=>{
  dispatch(team());
},[dispatch]);


const {items} = useSelector((state)=>state?.Test);
const {serves} = useSelector((state)=> state?.Serve);
const {teams} = useSelector((state)=>state?.TeamMems);
const se = useSelector((state)=>state.Auth)
  console.log(se);
console.log("testimonials");
console.log(items);

// console.log(items);








  return (
    <>
    <NavBar/>
    <div>
     
      <div style={{display:"flex",justifyContent:"center",marginLeft:"20px",columnGap:"85px"}}>
        <div style={{paddingBottom:"20px",height:"400px",boxSizing:"border-box"}}>
          <h1 style={{paddingTop:"30px",fontSize:"40px"}} >
            DeCode your Coding skills 
            <br />
            with
          </h1>
          <h1 className='alpha' style={{backgroundColor:"blue",color:"white",width:"225px",borderRadius:"15px",marginLeft:"123px",boxShadow:"1px 1px 10px 1px"}}>
            ALPHA
          </h1>
          <div id='mainbutn' >
           {localStorage.token?<>
            <Link id='Mlink' to="./Courses">
            Explore Now
            </Link>
           </>:<>
           <Link  id='Mlink2'  to="./Register">
            Register Now
            </Link>
           </>}
          </div>
        </div>

        <img  style={{height:"450px",width:"550px"}}    src= {Codingpic} alt="" />
      </div>
      <div style={{border:"0px solid black",width:"60%",height:"22px",backgroundColor:"#ff9e20",marginTop:"50px",textAlign:"right",paddingRight:"35px",paddingBottom:"35px",alignSelf:"center",borderTopRightRadius:"100px",borderBottomRightRadius:"100px",marginBottom:"70px"}}>
      <h1 style={{fontSize:"35px",paddingBottom:"80px",color:"white"}}>
        Our Services
      </h1>
      </div>
      <div style={{}}>
        
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.isArray(serves) && serves?.map((elems,index)=>{
            return(
              <Grid item xs={2} sm={4} md={4}  key={index}>
                <Paper  elevation={10} square={false}  sx={{ padding: 2 }}  style={{height:"300px",width:"350px",backgroundColor:"#e5ecef",marginLeft:"25px",marginBottom:"50px",border:"0px dotted black",borderRadius:"25px",}}>
                 <h2 style={{color:"blue"}}>
                 {elems.name}
                 </h2>
                 <p style={{fontWeight:"500"}}>
                  {elems.details}
                 </p>
                 <h5>
                  Created at: {elems.createdAt}
                  <br />
                  Updated at: {elems.updatedAt}
                 </h5>
               
                </Paper>
                
              </Grid>

            )
          })}
        </Grid>

       <div>
        {localStorage.token?<>
        <h1 style={{fontSize:"40px",marginTop:"90px"}}>
          Explore our most informative Blogs
        </h1>
        <button style={{height:"65px",width:"210px",paddingBottom:"6px",borderRadius:"20px",marginTop:"0px",border:"3px solid blue",backgroundColor:"blue",marginRight:"22px",marginBottom:"0px"}}>
          <Link style={{fontSize:"40px",textDecoration:"none",color:"white",}} to="/Blogs">
          Explore
          </Link>
          
        </button>
        </>:<>
        <h1  style={{fontSize:"40px",marginTop:"90px"}}>
          Explore our Premiuim Courses 
          <br />
          30% off
        </h1>
        <button style={{height:"65px",width:"210px",paddingBottom:"6px",borderRadius:"20px",border:"3px solid blue",backgroundColor:"blue",marginRight:"22px",marginBottom:"0px"}}>
          <Link style={{fontSize:"40px",textDecoration:"none",color:"white",}} to="/Courses">
          Explore
          </Link>
          
        </button>
        </>}
       </div>
<div style={{border:"0px solid black",width:"70%",height:"25px",backgroundColor:"#ff9e20",marginTop:"50px",textAlign:"right",paddingBottom:"35px",alignSelf:"center",borderTopLeftRadius:"100px",borderBottomLeftRadius:"100px",marginBottom:"70px",marginLeft:"400px"}}>
        <h1  style={{fontSize:"40px",paddingRight:"140px",color:"white",marginTop:"90px"}}>
          Both Online and Offline mode available
        </h1>
        </div>


        <h1 style={{marginRight:"1150px"}}>
          Online
        </h1>
        <p style={{textAlign:"left",marginLeft:"30px",fontWeight:"500"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt, voluptatibus nisi repellat ullam maiores animi illo sed eum ea! Corrupti sequi quaerat eligendi reiciendis fuga blanditiis nobis unde quo ipsa et voluptatibus molestiae cum tempora, ea itaque beatae ex saepe eius, quod ratione fugit eaque, eveniet veniam commodi. Saepe repudiandae neque veritatis, recusandae voluptate soluta nesciunt sapiente incidunt doloribus necessitatibus eius possimus et blanditiis cum earum ullam voluptas aspernatur quaerat sit placeat laudantium atque odio laborum? Quo, perferendis. Perspiciatis sapiente neque vero perferendis delectus architecto asperiores odit similique laboriosam modi! Ullam delectus dolore eveniet assumenda aut veniam voluptatibus voluptate.
        </p>
        <br />
        <h1 style={{marginRight:"1150px"}}>
          Offline
        </h1>
        <p style={{textAlign:"left",marginLeft:"30px",fontWeight:"500"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt, voluptatibus nisi repellat ullam maiores animi illo sed eum ea! Corrupti sequi quaerat eligendi reiciendis fuga blanditiis nobis unde quo ipsa et voluptatibus molestiae cum tempora, ea itaque beatae ex saepe eius, quod ratione fugit eaque, eveniet veniam commodi. Saepe repudiandae neque veritatis, recusandae voluptate soluta nesciunt sapiente incidunt doloribus necessitatibus eius possimus et blanditiis cum earum ullam voluptas aspernatur quaerat sit placeat laudantium atque odio laborum? Quo, perferendis. Perspiciatis sapiente neque vero perferendis delectus architecto asperiores odit similique laboriosam modi! Ullam delectus dolore eveniet assumenda aut veniam voluptatibus voluptate.
        </p>

        <div style={{border:"0px solid black",width:"60%",height:"30px",backgroundColor:"#ff9e20",marginTop:"50px",textAlign:"right",paddingRight:"35px",paddingBottom:"35px",alignSelf:"center",borderTopRightRadius:"100px",borderBottomRightRadius:"100px",marginBottom:"70px"}}>
        <h1  style={{fontSize:"40px",color:"white",marginTop:"90px"}}>
          Why we are the Best?
        </h1>
        </div>


        <li style={{fontSize:"30px",fontWeight:"500",textAlign:"left",paddingLeft:"50px"}}>Better Infrastructure</li>
        <li style={{fontSize:"30px",fontWeight:"500",textAlign:"left",paddingLeft:"50px"}}>Live free demo class</li>
        <li style={{fontSize:"30px",fontWeight:"500",textAlign:"left",paddingLeft:"50px"}}>24*7 Live support</li>
        <li style={{fontSize:"30px",fontWeight:"500",textAlign:"left",paddingLeft:"50px"}}>One to One Doubt support</li>
        <li style={{fontSize:"30px",fontWeight:"500",textAlign:"left",paddingLeft:"50px"}}>100% Placement</li>

        

</div>

<div style={{border:"0px solid black",width:"70%",height:"25px",backgroundColor:"#ff9e20",marginTop:"50px",textAlign:"right",paddingBottom:"35px",alignSelf:"center",borderTopLeftRadius:"100px",borderBottomLeftRadius:"100px",marginBottom:"70px",marginLeft:"400px"}}>
<h1  style={{fontSize:"40px",marginTop:"90px",paddingRight:"570px",color:"white",marginBottom:"100px"}}>
          Our testimonials
        </h1>
        </div>



<Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{Array.isArray(items) && items.map((elems,ind)=>{
          console.log("array");
          console.log(elems);
          return(
           <>
          
            
              <Grid item xs={2} sm={4} md={4}>
                <Paper elevation={20} sx={{ padding: 2 }} style={{height:"450px",marginLeft:"40px",width:"320px",backgroundColor:"#3e5a74",borderRadius:"20px",border:"8px solid lightgrey",outline:"0.5px dotted black",marginBottom:"50px"}}>
                <img src={`https://restapinodejs.onrender.com/api/testimonials/photo/${elems._id}`}  style={{height:"70px",width:"70px",borderRadius:"100px"}} alt="" />
              <h3 style={{color:"white",textAlign:"center"}}>
              {elems.name}
             </h3>
             <h4 style={{color:"white",}}>
              {elems.position}
             </h4>
             <p style={{color:"white",fontSize:"12px"}}>
              "{elems.talk}"

             </p>
             <h5 style={{color:"white"}}>
              Created at: {elems.createdAt}
              <br />
              Updated at: {elems.updatedAt}
             </h5>
             </Paper>
              </Grid>
            
            
          
          
           
           
           
           
           </>
          )
        })}
        </Grid>

        <div style={{border:"0px solid black",width:"60%",height:"30px",backgroundColor:"#ff9e20",marginTop:"50px",textAlign:"right",paddingRight:"35px",paddingBottom:"35px",alignSelf:"center",borderTopRightRadius:"100px",borderBottomRightRadius:"100px",marginBottom:"70px"}}>
        <h1 style={{marginTop:"80px",color:"white",marginBottom:"100px",paddingTop:"8px"}}>
          Our Beloved Team Members
        </h1>
        </div>

        <Grid  container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.isArray(teams)&& teams?.map((elems,index)=>{
            return(
              <>
              <Grid item xs={2} sm={4} md={3} key={index}>

                {/* <Paper elevation={10} sx={{ padding: 2 }} style={{height:"290px",marginLeft:"40px",width:"250px",backgroundColor:"#bee5d2",border:"6px solid #00ab58",borderRadius:"20px",marginBottom:"50px"}}> */}


                  <img src={`https://restapinodejs.onrender.com/api/team/photo/${elems._id}`} style={{height:"130px",width:"130px",borderRadius:"15px",marginTop:"50px"}} alt="" />
                  <h3 style={{color:"blue",textAlign:"center"}}>
              {elems.name}
             </h3>
             <h4 style={{color:"black",}}>
              {elems.possession}
             </h4>
             



                {/* </Paper> */}

              </Grid>
              
              
              
              </>
            )
          })}

        </Grid>
        

        <h1 style={{marginTop:"200px"}}>
          Liked Our Website?
          <br />
          Don't forget to leave a Comment
        </h1>
        <button style={{height:"50px",width:"200px",backgroundColor:"blue",border:"2px solid blue",borderRadius:"15px",fontSize:"20px",marginBottom:"100px"}}>
          <Link to='/Commentcrt' style={{textDecoration:"none",color:"white"}}>
          Leave a Comment
          </Link>
        </button>
        <Footer/>

    </div>
    </>
  )
}
