
import React, { useState }  from 'react'
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Header from '../header/Header'
import Navfooter from '../Footericon/Navfooter'

function Registerpage() {
    const [data,setData] = useState({name:"", age:"", email:"", password:"" ,gender:"male"});
    
    const HandleChange = (e) =>{
        const {name,value} = e.target;
        setData({...data,[name]:value}); 
    }
    const submitForm =async(e)=>{
        e.preventDefault();
       
        if(!data.name){
            toast.error("Please Fill Your Name");
            return;
        }
        if(!data.age){
            toast.error("Please Fill Your age");
            return;
        }
        if(!data.email){
            toast.error("Please Fill Your email");
            return;
        }
        if(!data.password){
            toast.error("Please Fill Your password");
            return;
        }
        if(!data.gender){
            toast.error("Please Fill Your gender");
            return;
        }
        let result =await fetch("http://localhost:8000/register",{
            method:"post",
            body: JSON.stringify(data),
            headers: {
               "Content-Type": 'application/json'
            },
            })
            result =await result.json()
            setData({name:"", age:"", email:"", password:"" ,gender:"male"});
            console.log(result);
            localStorage.setItem("form",JSON.stringify(result))  
    }
    
  return (
   <>
   <Header/>
    <div className='responsive-parent' style={{maxWidth:"500px",margin:"125px auto",padding:"20px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
    <ToastContainer/> 
    
        <form style={{ width:"100%",padding:"12px",marginBottom:"10px"}}>
            <h3 className='text-center' style={{textAlign:"center",marginBottom:"15px"}} >Register-Form</h3>
            <div className='mb-3'>
                <label htmlFor='name' style={{padding:"8px"}}> Enter Your Name</label>
                <input type='text' placeholder='Enter Your Name' className='form-control' value={data.name} name="name" onChange={(e)=>HandleChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='age' style={{padding:"8px"}}> Enter Your Age</label>
                <input type='date' placeholder='Enter Your age' className='form-control' value={data.age} name="age" onChange={(e)=>HandleChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='email' style={{padding:"8px"}}> Enter Your Email</label>
                <input type='email' placeholder='Enter Your Email' className='form-control' name="email" value={data.email} onChange={(e)=>HandleChange(e)}/>
            </div><div className='mb-3'>
                <label htmlFor='name' style={{padding:"8px"}}> Enter Your Password</label>
                <input type='password' placeholder='Enter Your Password' className='form-control' name="password" value={data.password} onChange={(e)=>HandleChange(e)}/>
            </div>
            <div className='mb-3'>
            <legend> Choose your gender :</legend>
        <label for="male" style={{padding:"8px"}}>Male</label>
        <input type="radio" name="gender" id="male" value={'male'} onChange={(e)=>HandleChange(e)} checked={data.gender === 'male'} />
        <label for="female" style={{padding:"8px"}}>Female</label>
        <input type="radio" name="gender" id="female" value={'female'} onChange={(e)=>HandleChange(e)} checked={data.gender === 'female'}/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-dark' onClick={(e)=>submitForm(e)}>Sign In</button>
                
            </div> 
        </form>
       
        </div>
        <Navfooter/>
        </>
  )
}


export default Registerpage