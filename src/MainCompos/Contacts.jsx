import React from 'react'
import mail from '../Images/maillogo.png';
import phone from '../Images/phone.png';
import wapp from '../Images/wap.png';
import Footer from './Footer';


export default function Contacts() {
  return (
    <div>
      <h1>
      Want to be connected with us?
      <br />
      Feel free to Contact
      </h1>
      <br /><br />
      <br />
      <div style={{display:"flex",height:"500px",justifyContent:"space-around",alignContent:"center"}}>
       
        <div style={{marginBottom:"0px",}}>
        <img src={phone} style={{height:"150px",width:"150px",marginBottom:"15px",marginTop:"30px"}} alt="" />
          <h2 >
          By Phone 
          <br />
          Our Contact Number
          <br /> 1234567890
          </h2>
        </div>


        <div style={{marginTop:"60px"}}>
<img src={mail} style={{height:"90px",width:"180px",marginBottom:"50px"}} alt="" />
        <h2>
          By Mail 
          <br />
          Our Email ID 
          <br />
          random1234@random.com
        </h2>
        </div>


        <div style={{marginTop:"30px"}}>
          <img src={wapp} style={{height:"120px",width:"120px",marginBottom:"50px"}}  alt="" />
        <h2>
          By Whatsapp 
          <br />
          Our Whatsapp Number
          <br />
          9876543210
        </h2>
        </div>



      </div>
      <Footer/>

    </div>
  )
}
