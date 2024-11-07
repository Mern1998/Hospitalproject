import React from 'react'
import { Link } from 'react-router-dom'
function Signup1() {
  return (
    <>
    
   
    <div className="container" style={{marginTop:"200px",marginLeft:"500px"}}>   
<div class="card" style={{width:"23rem"}}>
  <div class="card-body" style={{padding:"28px",borderRadius:"10px"}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="33.268" height="29.109" viewBox="0 0 33.268 29.109" style={{backgroundColor:"white",marginLeft:"5px",marginTop:"-80px"}}>
  <path id="Icon_awesome-heartbeat" data-name="Icon awesome-heartbeat" d="M20.8,16.011l-3.229,6.458A1.039,1.039,0,0,1,15.7,22.43L12,14.224l-1.949,4.659H3.937L15.795,31a1.158,1.158,0,0,0,1.67,0L29.328,18.883H22.24ZM30.777,4.972l-.156-.162a8.511,8.511,0,0,0-12.176,0L16.633,6.668,14.82,4.816a8.5,8.5,0,0,0-12.176,0l-.156.156A8.921,8.921,0,0,0,2.014,16.8H8.667L11,11.2a1.042,1.042,0,0,1,1.91-.026l3.781,8.4,3.184-6.361a1.038,1.038,0,0,1,1.858,0L23.526,16.8h7.725a8.921,8.921,0,0,0-.474-11.831Z" transform="translate(0.001 -2.246)" fill="black"/>
</svg>
    <h4 class="card-subtitle mb-4 text-muted" style={{fontWeight:"700"}}>I would like to :</h4>
    <Link to={`/Register`}>  <div className='btr'> <button type="button" className="btn btn-dark" style={{borderRadius:"50px",padding:"9px",width:"40%"}}>Find a care</button>
    <button type="button" className="btn btn-dark" style={{margin:"10px",borderRadius:"50px",padding:"9px",width:"40%"}}>Find a Job</button></div> </Link>
  </div>
</div>
    
  </div>
  </>
  )
}

export default Signup1