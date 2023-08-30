import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import "./Mailer.css";

function Mailer() {
    function sendemail(e){
        e.preventDefault();
        emailjs.sendForm('service_wsztd8l',
        'template_f1b5wwv',
        e.target,
        "BvKSL2Twyk7L8ndHk")
        .then(res=>{
            console.log(res);
            
        }).catch(err=>console.log(err));
    }


    const GetEmail = () =>{
        const [mailname,setMailname]=useState([]);

        const loadMailname = async () => {
            const response=await axios.get("http:localhost:5000/api/getmail")
        }
    }

  return (
    <div className='container border' style={{
        marginTop:"50px",
        width:"100%",
        height:"100%",
        backgroundImage:`url('https://media.istockphoto.com/photos/abstract-blurred-beautiful-interior-of-lobby-reception-condominium-picture-id1068830604?b=1&k=20&m=1068830604&s=170667a&w=0&h=TdW4NEuXZcESbejoZsYqK-YErUtNXl6fGHP9IDMvV1Q=')`,
        backgroundPosition:'center',
        backgroundSize:'cover',
    }}>
        <h1 style={{marginTop:"10px",
                    marginLeft:"25px"
                    }}>Sending Email</h1>

        <form className="row" style={{margin:"25px 85px 75px 100px"}}
         onSubmit={sendemail}>
           
            <label>Name.</label>
            <input type="text" name="name" className='form-control'></input>
            <label>Email.</label>
            <input type="email" name="u_email" className='form-control'></input>
            <br></br>
            <label>Message.</label>
            <br></br>
            <textarea type="text" name="message" rows="4" className='form-control'></textarea>
            <input type="submit" value="send" className='form-control btn btn-primary' style={{marginTop:"25px"}}></input>
        </form>
    </div>
  )
}

export default Mailer;