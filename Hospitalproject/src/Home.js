import React from "react";
import Header from "./header/Header";
import Banner from "./banner/Banner";
import Tabs from "./Tab/Tabfile";
import Card from "./Caregiver/Card";
import Service from "./service/Service";
import Story from "./stories/Story";
import Family from "./Extraordinary/Family";
import Footericon from "./Footericon/Footericon";
import Footertab from "./Footericon/Footertab";
import Navfooter from "./Footericon/Navfooter";
// import Location from "./Location/Location";
// import Dashboard from "./Dashbordpage/Dashbord";
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Tabs/>
      <Card />
      <Service />
      <Story />
      <Family />
      <Footericon />
      <Footertab />
      <Navfooter />
      {/* <Location/> */}
      {/* <Dashboard/> */}
    </div>
  );
}

export default Home;
