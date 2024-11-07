import "../Tab/tab.css";
import React, { useState } from "react";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 hidden-xs"></div>
        <div className="col-sm-6" id="ht">
          <nav className="nv">
            <div className="nav nav-tabs customtab" id="nav-tab" role="tablist">
              <button
                className="nav-link active tableft"
                // className={activeTab === "tab2" ? "active" : " "}
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
                value={activeTab}
                onClick={(e)=>handleTab1(e)}
              >
                Find Care{" "}
              </button>
              <button
                className="nav-link tabright"
              //  className ={activeTab === "tab1" ? "active" : " "}
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
                value={activeTab}
                onClick={(e)=>handleTab2(e)}
              >
                Find a Job
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent hm">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <h3>Help the trusted person!</h3>
              <p>
                Find home help to take care of your depenndent and isolated.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <h3>Help depenndent people</h3>
              <p>
                Find a serious and flexxible personal assistance job in 24
                hours.
              </p>
            </div>

            <div class="input-group mb-3" id="ipt">
            <span
                class="input-group-text"
                id="basic-addon2"
                style={{
                  color: "#C9C0BB",
                  marginTop:"5px"

                }}
              >
              <i class="fa fa-map-marker" style={{fontSize:"25px"}}></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Enter postcode"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              
            
              <span
                class="input-group-text"
                id="basic-addon2"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginTop:"4px",
                  padding:"9px",
                  margin:"5px 7px 0px"
                }}
              >
                FIND PERSON
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
