import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";


const NavBar = () => {
    let logOut = ()=>{
        localStorage.removeItem("token");
        window.location.reload();
        toast.success("Logout successful")
        
        }


  return (
    <div style={{display:"flex",justifyContent:"space-between",width:"100%",height:"80px",margin:"auto",marginBottom:"50px",marginTop:"5px",position:"sticky",top:"0",backdropFilter:"blur(20px)"}}>
        <div className='Logo' style={{fontWeight:"800",color:"blue",fontSize:"35px",letterSpacing:"2px",marginLeft:"20px"}}>
            ALPHA.COM
        </div>
        <div className='Navlink' style={{display:"flex",columnGap:"25px",marginTop:"15px",marginRight:"20px",alignItems:"center"}} >
            <Link className='hoverrr' style={{textDecoration:"none",letterSpacing:"1px",fontWeight:"700",}}  to="/">
                Home
            </Link>

            <div id='bnc'>
                {localStorage.token? <Link id='bc' style={{textDecoration:"none",color:"black"}}  to="/Blogs">
                Blogs
            </Link>:<></>}
           
            </div>


            <Link className='hoverrr' style={{textDecoration:"none",letterSpacing:"1px",fontWeight:"700"}}  to="/Contacts">
                Contact
            </Link>

             <div id='bnc'>
                {localStorage.token?<Link id='bc' style={{textDecoration:"none",color:"black"}}   to="/Courses">
                Courses
            </Link>:<></>}
            
            </div>


            <div style={{alignItems:"center",}} >
                {localStorage.token?<>
                <button className='lgot' style={{textDecoration:"none",letterSpacing:"1px",height:"35px",
               fontWeight:"700",paddingLeft:"15px",paddingRight:"15px",height:"37px",borderRadius:"10px",paddingTop:"0px",alignSelf:"center",marginTop:"3px"}}  onClick={logOut} >
                Logout
                </button>
                </>:<>
                <Link to="/Login" className='lgin' >
                Login
                </Link>
                </>}
            </div>
            <Link className='reg' style={{textDecoration:"none",letterSpacing:"1px",fontWeight:"700",paddingLeft:"13px",paddingRight:"13px",marginBottom:"0px",marginTop:"2px",borderRadius:"10px",paddingTop:"5px",height:"28px",alignSelf:"center"}}  to="/Register">
                Register
            </Link>

        </div>
      
    </div>
  )
}

export default NavBar
