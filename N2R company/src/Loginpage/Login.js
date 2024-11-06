
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../header/Header'
import Navfooter from '../Footericon/Navfooter'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function Login() { 
    const [data,setData]=useState({email:"", password:""});
    const[error,setError]=useState("")
    
    const HandleChange = (e) => {
        const {name,value} = e.target;
        setData({...data,[name]:value}); 
    }
     const submitPage=(e)=>{
        e.preventDefault();

        if(!data.email || !data.password){
            setError("please fill the page")
           }
     }
    const collecData= async(e)=> {
        e.preventDefault();
       
        if(!data.email){
            toast.error("Please Fill Your email");
            return;
        }
        if(!data.password){
            toast.error("Please Fill Your password");
            return;
        }
        let res =await fetch("http://localhost:7000/register",{
        method:"post",
        body: JSON.stringify(data),
        headers: {
           "Content-Type": 'application/json'
        },
        })
        res =await res.json()
        setData({email:"", password:""})
        console.log(res);
        localStorage.setItem("user",JSON.stringify(res))  
}
    return (
    <>
    <Header/>
  
    {/* <div className="container1"> */}
    {error && <div>{error}</div>}
   
    <div className='responsive-parent' style={{maxWidth:"400px",margin:"125px auto",padding:"20px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
    <ToastContainer/>
        <form style={{ width:"100%",padding:"12px",marginBottom:"10px"}} onSubmit={{submitPage}}>
            <h3 className='text-center' style={{textAlign:"center",marginBottom:"15px"}} >Login</h3>
            <div className='mb-3'>
                <label htmlFor='email' style={{padding:"8px"}}> Enter Your Email</label>
                <input type='email' placeholder='Enter Your Email' className='form-control' name="email" value={data.email} onChange={(e)=>HandleChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='password' style={{padding:"8px"}}>Password</label>
                <input type='password' placeholder='Enter Password' className='form-control' name='password' value={data.password} onChange={(e)=>HandleChange(e)}/>
            </div>
            <div className='mb-3'>
                <label htmlFor='checkbox' className='custom-control custome-checkbox' id='check'/>
                <input type='checkbox'className='custome-input-lable'/>
                    Rember me
            </div>
          
            <div className='d-grid'>
   
            
           <button className='btn btn-dark' onClick={(e)=>collecData(e)} >
            
             <Link to={`/dashbord`} style={{textDecoration:"none",color:"white",fontSize:"20px"}}> Log in   </Link></button>    
            </div>
            
            <div style={{textAlign:"center",marginTop:"11px"}} >Don't have account
            <Link to={`/registerpage`} style={{textDecoration:"none",color:"black",fontWeight:"500",margin:'4px'}}>Register </Link>
            </div>

            
            {/* <p className='text end'>
                Forgot  <Link to={"register"} className='r2'>Register</Link>
            </p> */}
            
        </form>
        </div>
    {/* </div> */}
    <Navfooter/>
    </>
  )
        }


export default Login