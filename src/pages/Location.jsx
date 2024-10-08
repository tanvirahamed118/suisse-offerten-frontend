import React from "react";
import LocationAction from "../components/Location-action";
import CityList from "../components/City-list";

function Location() {
  return (
    <React.Fragment>
      <LocationAction />
      <CityList />
    </React.Fragment>
  );
}

export default Location;
