import React from "react";
import SingleOfferMoving from "../components/Single-offer-moving";
import OfferTab from "../components/Offer-tab";
import { useParams } from "react-router-dom";
import { useGetOneJobQuery } from "../redux/rtk/features/job/jobApi";

function SingleOffer() {
  const param = useParams();
  const id = param.id;
  const { data, isLoading, isSuccess } = useGetOneJobQuery(id, {
    refetchOnMountOrArgChange: true, // Automatically refetch on navigation or param change
  });

  const sellerAuth = localStorage.getItem("seller");

  const seller = JSON.parse(sellerAuth);

  return (
    <React.Fragment>
      <SingleOfferMoving
        data={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
      {!seller?.sellerToken && <OfferTab />}
    </React.Fragment>
  );
}

export default SingleOffer;
