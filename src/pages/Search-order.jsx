import React from "react";
import OrderBook from "../components/Order-book";
import OffersFilter from "../components/Offers-filter";
import OfferItems from "../components/Offer-items";

function SearchOrder() {
  return (
    <React.Fragment>
      <OrderBook />
      <OffersFilter />
      <OfferItems />
    </React.Fragment>
  );
}

export default SearchOrder;
