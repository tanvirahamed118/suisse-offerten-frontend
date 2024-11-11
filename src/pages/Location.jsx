import React from "react";
import LocationAction from "../components/Location-action";
import LocationFilter from "../components/Location-filter";
import LocationLists from "../components/Location-lists";

function Location() {
  return (
    <React.Fragment>
      <LocationAction />
      <div className="flex lg:flex-row flex-col gap-0 lg:gap-10 container pt-10">
        <LocationFilter />
        <LocationLists />
      </div>
    </React.Fragment>
  );
}

export default Location;
