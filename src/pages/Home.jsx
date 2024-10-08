import React from "react";
import CallOfAction from "../components/Call-of-action";
import Cetagories from "../components/Cetagories";
import Advantage from "../components/Advantage";
import AllCeatgories from "../components/All-ceatgories";
import HowWorks from "../components/How-works";
import SubscribeTab from "../components/Subscribe-tab";

function Home() {
  return (
    <React.Fragment>
      <CallOfAction />
      <Cetagories />
      <Advantage />
      <HowWorks />
      <AllCeatgories />
      <SubscribeTab />
    </React.Fragment>
  );
}

export default Home;
