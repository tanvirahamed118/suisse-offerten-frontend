import { useEffect, useMemo, useState } from "react";
import { useGetAllProposalsQuery } from "../redux/rtk/features/proposal/proposalApi";
import PropTypes from "prop-types";

function ConfirmOffer({ id, sellerId, sellerToken }) {
  const page = 1;
  const limit = 20;
  const { data } = useGetAllProposalsQuery({ id: "", page, limit });
  const [client, setClient] = useState(null);
  const filterData = useMemo(() => {
    return data?.proposals?.filter(
      (item) => item?.sellerId === sellerId && item?.jobId === id
    );
  }, [data, sellerId, id]);
  useEffect(() => {
    if (filterData?.length > 0) {
      fetch(
        `${import.meta.env.VITE_APP_API_URL}/auth/client/${
          filterData?.[0]?.clientId
        }`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${sellerToken}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setClient(data));
    }
  }, [filterData, sellerToken]);

  return filterData?.status === "confirmed" && sellerToken ? (
    <div className="bg-[#FEF7E2] p-5 rounded-md flex flex-col gap-1">
      <h2 className="text-black text-lg font-bold">Offer has been confirmed</h2>
      <p className="text-black text-base font-normal">
        Your offer has been confirmed by the client.
      </p>
      <p className="text-black text-base font-normal my-3">
        Contact details of the clients:
      </p>

      <ul className="flex flex-col gap-1">
        <li className="flex items-center gap-1">
          <h5 className="text-base font-bold text-black">Salutaion:</h5>
          <p className="text-black text-base font-normal">
            {client?.salutation}
          </p>
        </li>
        <li className="flex items-center gap-1">
          <h5 className="text-base font-bold text-black">First name:</h5>
          <p className="text-black text-base font-normal">
            {client?.firstname}
          </p>
        </li>
        <li className="flex items-center gap-1">
          <h5 className="text-base font-bold text-black">Surname:</h5>
          <p className="text-black text-base font-normal">{client?.username}</p>
        </li>
        <li className="flex items-center gap-1">
          <h5 className="text-base font-bold text-black">Phone:</h5>
          <p className="text-black text-base font-normal">{client?.phone}</p>
        </li>
      </ul>
    </div>
  ) : null;
}
ConfirmOffer.propTypes = {
  sellerId: PropTypes.any,
  id: PropTypes.any,
  sellerToken: PropTypes.any,
};
export default ConfirmOffer;
