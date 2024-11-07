import React from 'react'
import Header from '../header/Header'
import Navfooter from '../Footericon/Navfooter'
function Seekarlogin() {
  return (
    <>
    <Header/>
    <div className='container' style={{marginTop:"80px"}}>
    <div class="shadow p-3 mb-5 bg-white rounded">
    <div style={{marginLeft:"190px",padding:"10px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="33.268" height="29.109" viewBox="0 0 33.268 29.109" id='vg'>
  <path id="Icon_awesome-heartbeat" data-name="Icon awesome-heartbeat" d="M20.8,16.011l-3.229,6.458A1.039,1.039,0,0,1,15.7,22.43L12,14.224l-1.949,4.659H3.937L15.795,31a1.158,1.158,0,0,0,1.67,0L29.328,18.883H22.24ZM30.777,4.972l-.156-.162a8.511,8.511,0,0,0-12.176,0L16.633,6.668,14.82,4.816a8.5,8.5,0,0,0-12.176,0l-.156.156A8.921,8.921,0,0,0,2.014,16.8H8.667L11,11.2a1.042,1.042,0,0,1,1.91-.026l3.781,8.4,3.184-6.361a1.038,1.038,0,0,1,1.858,0L23.526,16.8h7.725a8.921,8.921,0,0,0-.474-11.831Z" transform="translate(0.001 -2.246)" fill="white"/>
</svg></div>
<h4 className='hd' style={{textAlign:"center"}}>Babysitter or Nanny</h4>
<div className="form-group">
    <label for="exampleInputEmail1">Where do you need care</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter postcode"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <i className="fa fa-map-marker" style={{fontSize:"20px",float:"right",marginTop:"-28px",marginRight:"14px"}}></i>
    </div>
    <div className="form-group">
    <label for="exampletextAddress">Post Title</label>
    <input type="text" className="form-control"  placeholder="Enter your post title"/>
  </div>
  <div className="form-group">
    <label for="exampleEmailAddress">Post Description</label>
    <textarea className="form-control"  placeholder="Enter your post description"></textarea>
  </div>
  <div className="form-group">
  <label for="exampleEmailAddress">Who needs care ?</label>
  <div class="input-group">
  <button class="btn btn-outline-secondary" type="button">child1</button>
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Select child range</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">Add child</button>
</div>

<div class="input-group">
  <button class="btn btn-outline-secondary" type="button">child2</button>
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Select child range</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">Remove</button>
</div>
</div>
<div className='form-group'>
<label for="exampleEmailAddress">Who needs care ?</label>
<div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
</div>

<div className='form-group'>
<div class="input-group">
<input type="date"  aria-label="Last name" className="form-control" id="Birtday" value="Birtday" placeholder='Estimated start date'/>
  <input type="date" aria-label="Last name" className="form-control" id="Birtday" value="Birtday"/>
</div>
</div>
  
    </div>
    </div>
    <Navfooter/>
    </>
  )
}

export default Seekarlogin