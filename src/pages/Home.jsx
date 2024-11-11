import React from "react";
import CallOfAction from "../components/Call-of-action";
import Cetagories from "../components/Cetagories";
import Advantage from "../components/Advantage";
import AllCeatgories from "../components/All-ceatgories";
import HowWorks from "../components/How-works";
import SubscribeTab from "../components/Subscribe-tab";

function Home() {
  const sellerAuth = localStorage.getItem("seller");
  const seller = JSON.parse(sellerAuth);
  const token = seller?.sellerToken;

  return (
    <React.Fragment>
      <CallOfAction />
      {!token && <Cetagories />}

      <Advantage />
      <HowWorks />
      {!token && <AllCeatgories />}

      <SubscribeTab />
    </React.Fragment>
  );
}

export default Home;
