import React from 'react'
import '../Caregiver/card.css'
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Navfooter from '../Footericon/Navfooter';
function Jobcard () {
  return (
    <>
    <Header/>
    <div style={{textAlign:"center",marginTop:"90px"}}>
    <p style={{fontSize:"30px"}}>
    Post a job fast and find the care you need</p>
    <h3 style={{fontWeight:"600px"}}>What type of help do you need ?</h3>
    <div className='row' style={{margin:"64px",padding:"48px",display:"flex",flexWrap:"nowrap",justifyContent:"center",gap:"20px",}}>
        {/* <div className='row' style={{marginTop:"43px",display:"flex",flexWrap:"nowrap",justifyContent:"center"}}>  */}
        <div class="col-sm-2">
        <div class="card h-100">
       <div class="card-body">
       <Link to={`/Seekarlogin`}> <svg xmlns="http://www.w3.org/2000/svg" width="33.268" height="29.109" viewBox="0 0 33.268 29.109">
  <path id="Icon_awesome-heartbeat" data-name="Icon awesome-heartbeat" d="M20.8,16.011l-3.229,6.458A1.039,1.039,0,0,1,15.7,22.43L12,14.224l-1.949,4.659H3.937L15.795,31a1.158,1.158,0,0,0,1.67,0L29.328,18.883H22.24ZM30.777,4.972l-.156-.162a8.511,8.511,0,0,0-12.176,0L16.633,6.668,14.82,4.816a8.5,8.5,0,0,0-12.176,0l-.156.156A8.921,8.921,0,0,0,2.014,16.8H8.667L11,11.2a1.042,1.042,0,0,1,1.91-.026l3.781,8.4,3.184-6.361a1.038,1.038,0,0,1,1.858,0L23.526,16.8h7.725a8.921,8.921,0,0,0-.474-11.831Z" transform="translate(0.001 -2.246)" fill="white"/>
</svg></Link>
        <h5 class="card-title">Child Care</h5>
        <p class="card-text">Babysitter or Nanny Daycare Center Special Needs</p>
      </div> 
    </div> 
  </div> 
  <div class="col-sm-2">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
      <svg xmlns="http://www.w3.org/2000/svg" width="33.268" height="29.109" viewBox="0 0 33.268 29.109">
  <path id="Icon_awesome-heartbeat" data-name="Icon awesome-heartbeat" d="M20.8,16.011l-3.229,6.458A1.039,1.039,0,0,1,15.7,22.43L12,14.224l-1.949,4.659H3.937L15.795,31a1.158,1.158,0,0,0,1.67,0L29.328,18.883H22.24ZM30.777,4.972l-.156-.162a8.511,8.511,0,0,0-12.176,0L16.633,6.668,14.82,4.816a8.5,8.5,0,0,0-12.176,0l-.156.156A8.921,8.921,0,0,0,2.014,16.8H8.667L11,11.2a1.042,1.042,0,0,1,1.91-.026l3.781,8.4,3.184-6.361a1.038,1.038,0,0,1,1.858,0L23.526,16.8h7.725a8.921,8.921,0,0,0-.474-11.831Z" transform="translate(0.001 -2.246)" fill="white"/>
</svg>
      
        <h5 class="card-title">Senior care</h5>
        <p class="card-text">Companion Care Hands-on Care Live-in Care</p>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
      <svg xmlns="http://www.w3.org/2000/svg" width="33.268" height="29.109" viewBox="0 0 33.268 29.109">
  <path id="Icon_awesome-heartbeat" data-name="Icon awesome-heartbeat" d="M20.8,16.011l-3.229,6.458A1.039,1.039,0,0,1,15.7,22.43L12,14.224l-1.949,4.659H3.937L15.795,31a1.158,1.158,0,0,0,1.67,0L29.328,18.883H22.24ZM30.777,4.972l-.156-.162a8.511,8.511,0,0,0-12.176,0L16.633,6.668,14.82,4.816a8.5,8.5,0,0,0-12.176,0l-.156.156A8.921,8.921,0,0,0,2.014,16.8H8.667L11,11.2a1.042,1.042,0,0,1,1.91-.026l3.781,8.4,3.184-6.361a1.038,1.038,0,0,1,1.858,0L23.526,16.8h7.725a8.921,8.921,0,0,0-.474-11.831Z" transform="translate(0.001 -2.246)" fill="white"/>
</svg>
      
        <h5 class="card-title">Petcare </h5>
        <p class="card-text">Pet Sitter walker Trainer Groomer</p>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card h-100">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
      <svg xmlns="http://www.w3.org/2000/svg" width="33.268" height="29.109" viewBox="0 0 33.268 29.109">
  <path id="Icon_awesome-heartbeat" data-name="Icon awesome-heartbeat" d="M20.8,16.011l-3.229,6.458A1.039,1.039,0,0,1,15.7,22.43L12,14.224l-1.949,4.659H3.937L15.795,31a1.158,1.158,0,0,0,1.67,0L29.328,18.883H22.24ZM30.777,4.972l-.156-.162a8.511,8.511,0,0,0-12.176,0L16.633,6.668,14.82,4.816a8.5,8.5,0,0,0-12.176,0l-.156.156A8.921,8.921,0,0,0,2.014,16.8H8.667L11,11.2a1.042,1.042,0,0,1,1.91-.026l3.781,8.4,3.184-6.361a1.038,1.038,0,0,1,1.858,0L23.526,16.8h7.725a8.921,8.921,0,0,0-.474-11.831Z" transform="translate(0.001 -2.246)" fill="white"/>
</svg>
      
        <h5 class="card-title">Home care</h5>
        <p class="card-text">Housekeeper House Cleaning Personal Assistant Errands & Odd jobs</p>
      </div>
    </div>
  </div>
</div>
    </div>
    <Navfooter/>
    </>
  )
}

export default Jobcard;