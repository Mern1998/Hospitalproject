import React from "react";
import "../Ragisterpage/sign.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Navfooter from "../Footericon/Navfooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [data, setData] = useState({  email: "", password: "",name:"",phoneNumber:"" });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const collecData = async (e) => {
    e.preventDefault();

    if (!data.email) {
      toast.error("Please Fill Your email");
      return;
    }
    if (!data.password) {
      toast.error("Please Fill Your password");
      return;
    }
    if (!data.name) {
      toast.error("Please Fill Your  name");
      return;
    }
    let res = await fetch("http://localhost:7000/register", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    res = await res.json();
    setData({ email: "", password: "",name:"",phoneNumber:"" });
    console.log(res);
    localStorage.setItem("user", JSON.stringify(res));
  };
  return (
    <>
      <Header />
      <div className="container" id="ctn">
        <ToastContainer />
        <div className="shadow p-4 mb-5 bg-body rounded" id="mgn">
          <form className="frm">
            <div className="form-group">
              {/* <div className="form-group" id="ipt"> */}
              <label for="exampleInputEmail1">Where do you need care</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter postcode"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <i
                className="fa fa-map-marker"
                style={{
                  fontSize: "20px",
                  float: "right",
                  marginTop: "-28px",
                  marginRight: "14px",
                }}
              ></i>
            </div>
            <div className="form-group">
              <label for="exampleInputFirstName"> Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFirstName"
                placeholder="Enter your first name"
                name="name"
                value={data.name}
                onChange={(e) => HandleChange(e)}
              />
              {/* <div className="form-group">
              <label for="exampleInputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLastName"
                placeholder="Enter your last name"
              />
            </div> */}
            </div>
            <div className="form-group">
              <label for="exampleEmailAddress">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={data.email}
                onChange={(e) => HandleChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="Birtday">Date Of Birtday</label>
              <input
                type="date"
                className="form-control"
                id="Birtday"
                value="Birtday"
              />
            </div>

            <div className="form-group">
              <label for="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                placeholder="Enter your phone number:"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                value={data.phone}
                onChange={(e) => HandleChange(e)}
              />
            </div>

            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={data.password}
                onChange={(e) => HandleChange(e)}
              />
            </div>

            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                I agree to Website T&C
              </label>
            </div>
            <Link to={`/Jobcard`}>
              {" "}
              <button
                type="Ragister"
                className="btn btn-primary"
                id="btn2"
                onClick={(e) => collecData(e)}
              >
                Ragister
              </button>
            </Link>
            <p style={{ textDecoration: "none", textAlign: "center" }}>
              Already have an account ?<Link to={`/login`}> Log in </Link>
            </p>
          </form>
        </div>
      </div>
      <Navfooter />
    </>
  );
}

export default Signup;
