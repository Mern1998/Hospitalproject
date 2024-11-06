import React from "react";
// import { Link } from 'react-router-dom'
import "./register.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Navfooter from "../Footericon/Navfooter";

function Register() {
  return (
    <>
      <Header />
      <div
        className="container"
        style={{
          marginTop: "130px",
          justifyContent: "center",
          textAlign: "center",
          marginBottom:"280px"
        }}
      >
        <h2>What are you looking For ?</h2>
        <div
          className="row"
          style={{
            justifyContent: "center",
            margin: "60px",
            padding: "10px",
            gap: "30px",
          }}
        >
          <div
            style={{
              maxWidth: "22rem",
              backgroundColor: "#fff",
              border: "0.2px solid black",
              borderRadius: "5px",
            }}
          >
            <Link to={`/Signup`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-briefcase-fill"
                viewBox="0 0 16 16"
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  color: "black",
                  padding: "12px",
                  marginTop: "-24px",
                }}
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
              </svg>
            </Link>

            {/* <div class="card-header">Header</div> */}
            <div>
              <h5>I want a care job</h5>
              <p> Create a profile and search for jobs.</p>
            </div>
          </div>

          <div
            style={{
              maxWidth: "22rem",
              backgroundColor: "#9B9A96",
              borderRadius: "5px",
            }}
          >
            <Link to={`/Signup`}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-briefcase-fill"
                viewBox="0 0 16 16"
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  color: "white",
                  padding: "12px",
                  marginTop: "-24px",
                }}
              >
                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
              </svg>
            </Link>
            {/* <div class="card-header">Header</div> */}
            <div>
              <h5>I need a caregiver</h5>
              <p>Start your free search for care in your area.</p>
            </div>
          </div>
        </div>
      </div>
       <Navfooter/> 

    </>
  );
}

export default Register;
