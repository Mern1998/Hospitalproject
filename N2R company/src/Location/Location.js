// import React, { useState } from 'react'

// function Location() {
// const bData =[
//   {
//     id:0, myname:"petre",age:26
//   },
//   {
//     id:0, myname:"petre",age:26
//   }
// ]
//   const [clr,setClr]=useState(bData)
//   const [mObj,setObj] =useState("")

//   function clearData(){
//     setClr([])
//   }
//   function changeName(){
//     setObj("")
//   }
//   return (
//     <>
    
//     {
//       clr.map((currName)=>
//       <h1 style={{color:"red",fontSize:"1rem", border:"2px solid black", width:"170px", borderRadius:"45%",padding:"8px",backgroundColor:"yellow"}}>
//       name :{currName.myname} age  :   {currName.age}</h1>)
//     }
//     <button onClick={clearData}>clear </button>
    
//     <div>
//       <h1  className='h1style'> {mObj}Name:sam age:21</h1>
//       <button className='btn' onClick={changeName}>update</button>
//     </div>
    
    
//     </>
//   )
    
  
// }

// export default Location