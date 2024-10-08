import React from "react";
import Costs from "../components/Costs";
import Orders from "../components/Orders";
import CustomerSay from "../components/Customer-say";
import Faq from "../components/Faq";
import News from "../components/News";
import Business from "../components/Business";

function EnterCompany() {
  return (
    <React.Fragment>
      <Orders />
      <Costs />
      <CustomerSay />
      <Faq />
      <News />
      <Business />
    </React.Fragment>
  );
}

export default EnterCompany;
