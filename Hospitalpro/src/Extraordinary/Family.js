import React from "react";

function Family() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "black",
        width: "1450px",
        height: "430px",
        color: "#f8f9fa",
        marginBottom: "50px",
        marginTop: "160px",
      }}
    >
      <div className="row">
        <div className="col-sm-6">
          <div
            role="group"
            aria-lable="Basic checkbox toggle button group"
            style={{
              marginTop: "-15px",
              paddingLeft: "113px",
              letterSpacing: "1px",
            }}
          >
            <h2 style={{ marginTop: "50px" }}>
              Excellent Caregivers for Extraordinary Families
            </h2>

            <p>
              {" "}
              <i class="fa fa-check-circle"> </i>
              Give yourself the power of responsibility.Remind yourself the only
              thing stopping you is yourself
            </p>

            <p>
              {" "}
              <i class="fa fa-check-circle"> </i>
              Give yourself the power of responsibility.Remind yourself the only
              thing stopping you is yourself
            </p>

            <p>
              {" "}
              <i class="fa fa-check-circle"> </i>
              Give yourself the power of responsibility.Remind yourself the only
              thing stopping you is yourself
            </p>

            <p>
              {" "}
              <i class="fa fa-check-circle"> </i>
              Give yourself the power of responsibility.Remind yourself the only
              thing stopping you is yourself
            </p>
          </div>
        </div>

        <div
          className="col-sm-6"
          style={{ paddingLeft: "75px", marginTop: "-120px" }}
        >
          <img src="../image/ordinary.jpg" height={"550px"} />
        </div>
      </div>
    </div>
  );
}

export default Family;
