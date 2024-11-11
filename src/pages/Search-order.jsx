import React from "react";
import OrderBook from "../components/Order-book";
import OffersFilter from "../components/Offers-filter";
import OfferItems from "../components/Offer-items";

function SearchOrder() {
  return (
    <React.Fragment>
      <OrderBook />
      <div className="flex lg:flex-row flex-col gap-0 lg:gap-10 container pt-10">
        <OffersFilter />
        <OfferItems />
      </div>
    </React.Fragment>
  );
}

export default SearchOrder;
