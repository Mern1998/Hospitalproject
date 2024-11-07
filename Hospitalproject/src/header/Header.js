import React from 'react'
import { Link } from 'react-router-dom';
import '../header/head.css';

function Header() {
  return (
    <>
    <div className="container" >
    <div className='col-sm-12' style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand" id='navbar' href="/" style={{fontFamily:"monospace",display:"flex",fontWeight:"900",fontSize:"28px",marginLeft:"65px"}}>Your <h3 style={{fontSize:"30px",fontWeight:"900"}}>Logo</h3></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{marginLeft:"280px",fontWeight:"700",gap:"40px",textDecoration:"none"}} >
          <li className="nav-item">
          <Link to={`/` } className="nav-link active" aria-current="page" href="/">ABOUT US</Link>
          </li>
          <li className="nav-item">
          <Link to={`/Howitwork` }className="nav-link" href="/">HOW IT WORK</Link>
          </li>
          <li className="nav-item dropdown">
          <Link to={`/` } className='nav-link' href='/'>
              HELP </Link>
          </li>
        </ul>
        <form style={{marginRight:"55px"}}>
        {/* <Link>TEST</Link> */}
        <Link to={`/login`} className="btn btn-secondary" style={{margin:"20px",backgroundColor:"black",width:"90px",padding:"5px"}}>LOG IN</Link>
        <Link to={`/register`} className="btn btn-secondary" style={{margin:"20px",backgroundColor:"black",width:"100px",padding:"5px"}}>REGISTER</Link>

        </form>
      </div>
    
  </nav>
  </div>
 
  </div>
  </>
   )
}

export default Header


















































//     <div classNameName='.container-fluid'>
//     <div classNameName='parrent'>
//     <ul className="nav justify-content-center">
//   <li classNameName="nav-item">
//     <a classNameName="nav-link active" aria-current="page" href="/">ABOUT US</a>
//   </li>
//   <li classNameName="nav-item">
//     <a className="nav-link" href="/">HOW IT WORK</a>
//   </li>
//   <li classNameName="nav-item">
//     <a classNameName="nav-link" href="/">HELP</a>
//   </li>
// </ul>
//  <div classNameName="d-grid gap-2 d-md-flex justify-content-md-end">
//  {/* <button classNameName="btn btn-primary me-md-2" type="button">LOG IN</button> */}
//  <button type="button" className="btn btn-secondary">LOG IN</button>
//  <button type="button" className="btn btn-secondary">REGISTER</button>
//  {/* <button classNameName="btn btn-primary" type="button">REGISTER</button> */}
// </div>
//     </div>   
//     </div>
 