// import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import '../Footericon/Navfooter.css';

export default function Footer() {
  // const [fb, setfb] = useState("https://www.facebook.com/");
  // const [insta, setinsta] = useState("https://www.instagram.com");
  // const [twitter, setTwitter] = useState("https://www.twitter.com");
  // const [linkedin, setLinkedIn] = useState("https://www.linkedin.com");
  // const headers = {
  //     Accept: "application/json, text/plain, */*",
  //     "Content-Type": "application/json"
  // };
  // function GetPages() {
  //     axios.get(`/api/get-footer-data`, { headers }).then((response) => {
  //         setfb(response.data.setting.facebook)
  //         setinsta(response.data.setting.instagram)
  //         setTwitter(response.data.setting.twitter)
  //         setLinkedIn(response.data.setting.linkedin)
  //     });
  // }

  // useEffect(() => {
  //    GetPages();
  // }, []);
  return (
    <footer className="footerbg pb-3">
      <div className="container">
        <div className="row py-1">
          <div className="col-lg-12 text-center">
            <div className="FLogo">
              <Link to="/" className="text-decoration-none">
               <p id="paragraph">YourLogo</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row text-dark">
          <div className="col-sm-12 col-12">
            <ul className="list-inline footermenu">
              <li>
                <Link className="text-decoration-none" to={`/page/about-us`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to={`/page/how-it-work`}>
                  How it Work
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to={`/page/help`}>
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-decoration-none" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none"
                  to={`/page/privacy-policy`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none"
                  to={`/page/term-conditions`}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-12">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
              }}
            >
              <li>
                {" "}
                <a href="/">
                  <i
                    class="fa fa-facebook-f"
                    style={{
                      fontSize: "28px",
                      padding: "11px",
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  ></i>
                </a>
              </li>
              <li>
                {" "}
                <a href="/">
                  <i
                    class="fa fa-instagram"
                    style={{
                      fontSize: "28px",
                      marginLeft: "10px",
                      padding: "11px",
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  ></i>
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <i
                    class="fa fa-twitter"
                    style={{
                      fontSize: "28px",
                      marginLeft: "10px",
                      padding: "11px",
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  ></i>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="/">
                  <i
                    class="fa fa-linkedin"
                    style={{
                      fontSize: "28px",
                      marginLeft: "10px",
                      padding: "11px",
                      backgroundColor: "blue",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center copyright text-white">
          <i className="mdi mdi-copyright"></i> Copyright 2024 <b>Weecare</b>{" "}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
