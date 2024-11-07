import React from "react";

function Story() {
  return (
    <div className=".container-fluid">
      <div
        className="row"
        style={{
          margin: "25px 77px 20px",
          marginTop: "15px",
          backgroundImage: `url("../image/Group.jpg ")`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          borderRadius: "9px",
        }}
      >
        <div
          style={{
            color: "#f8f9fa",
            marginTop: "60px",
            marginLeft: "41px",
            marginBottom: "-12px",
          }}
        >
          Feedback
          <h2>Stories From Our Customer`s</h2>
        </div>
        <div
          style={{
            margin: "45px 54px 50px",
            width: "437px",
            color: "black",
            backgroundColor: "#f8f9fa",
            padding: "22px",
            borderRadius: "8px",
            textAlign: "justify",
            marginBottom: "50px",
            boxShadow:
              " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
          }}
        >
          <p>
            {" "}
            complete reference to all of the props and classes available to the
            components mentioned here available to the components mentioned
            here.
          </p>
          <img
            src="../image/Ellipse.png"
            alt=""
            style={{ marginBottom: "40px" }}
          />
          <div style={{ display: "inline-block", margin: "10px" }}>
            <h5>Honey Melton</h5>
            <p>France</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73.72"
            height="52.976"
            viewBox="0 0 78.72 62.976"
            style={{
              backgroundColor: "#f8f9fa",
              marginLeft: "98px",
              border: "none",
            }}
          >
            <path
              id="Icon_metro-quote"
              data-name="Icon metro-quote"
              d="M87.075,41.128V9.64H55.587V41.128H71.331s0,15.744-15.744,15.744V72.616S87.075,72.616,87.075,41.128ZM8.355,56.872V72.616s31.488,0,31.488-31.488V9.64H8.355V41.128H24.1S24.1,56.872,8.355,56.872Z"
              transform="translate(-8.355 -9.64)"
              opacity="0.11"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Story;
// text-align: justify;
// text-justify: inter-word;
