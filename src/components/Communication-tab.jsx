import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  useGetAllMessageQuery,
  useUpdateMessageMutation,
} from "../redux/rtk/features/message/messageApi";
import { useEffect, useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MessageLoading from "./loading/message-loading";

function CommunicationTab({ id, sellerId }) {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useGetAllMessageQuery();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const client = useMemo(() => {
    const clientAuth = localStorage.getItem("client");
    return clientAuth ? JSON.parse(clientAuth) : null;
  }, []);
  const seller = useMemo(() => {
    const sellerAuth = localStorage.getItem("seller");
    return sellerAuth ? JSON.parse(sellerAuth) : null;
  }, []);

  const sellerData = useMemo(() => {
    if (seller?.sellerToken) {
      return data?.filter(
        (item) => item.jobId === id && item?.sellerId === seller?.seller?._id
      );
    }
    return [];
  }, [data, id, seller]);

  const [
    updateMessage,
    {
      data: createData,
      isLoading: isCreatLoading,
      isSuccess: isCreateSuccess,
      isError: isCreateError,
      error: createError,
    },
  ] = useUpdateMessageMutation();

  useEffect(() => {
    if (data) {
      const filteredMessages = data
        .filter((item) => item.jobId === id && item.sellerId === sellerId)
        .flatMap((item) => [
          ...item.sellerMessage.map((msg) => ({ sender: "Seller", ...msg })),
          ...item.clientMessage.map((msg) => ({ sender: "Client", ...msg })),
        ])
        .sort((a, b) => a.time - b.time);
      setMessages(filteredMessages);
    }
  }, [data, id, sellerId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = sellerData[0]?._id;
    let sellerMessage = { sellerMessage: message };
    updateMessage({ sellerMessage, id });
    setMessage("");
  };

  useEffect(() => {
    if (isCreateError) {
      toast.error(createError?.data?.message);
    }
    if (isCreateSuccess) {
      toast.success(createData?.message);
    }
  }, [isCreateError, isCreateSuccess, createError, createData]);

  //   decide what to render
  let content;
  if (isLoading) {
    content = <MessageLoading />;
  }
  if (isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = <p>{t("no_data_found")}</p>;
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = messages.map((msg, index) => {
      const date = new Date(msg?.date);
      const day = date.getUTCDate();
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const month = monthNames[date.getUTCMonth()];
      const year = date.getUTCFullYear();
      const formattedDate = `${day} ${month} ${year}`;

      return (
        <div key={index} className="w-auto grid justify-items-stretch gap-0">
          <div
            className={`w-auto max-w-2xl flex flex-col p-3 rounded-md whitespace-pre-line ${
              msg.sender === "Seller"
                ? seller?.sellerToken
                  ? "bg-[#DCF8C6] justify-self-end"
                  : client?.clientToken
                  ? "justify-self-start bg-[#fff]"
                  : null
                : seller?.sellerToken
                ? "justify-self-start bg-[#fff]"
                : client?.clientToken
                ? "justify-self-end bg-[#DCF8C6]"
                : null
            }`}
            dangerouslySetInnerHTML={{
              __html: msg.message.replace(/\n/g, "<br/>"),
            }}
          ></div>

          <p
            className={`flex flex-col rounded-md pt-1 text-gray-300 text-xs ${
              msg.sender === "Seller"
                ? seller?.sellerToken
                  ? "justify-self-end"
                  : client?.clientToken
                  ? "justify-self-start"
                  : null
                : seller?.sellerToken
                ? "justify-self-start"
                : client?.clientToken
                ? "justify-self-end"
                : null
            }`}
          >
            {formattedDate}
          </p>
        </div>
      );
    });
  }

  return sellerData?.length > 0 &&
    sellerData?.[0]?.status === "progress" &&
    sellerData?.[0]?.offerRequest ? (
    <div className="mt-5">
      <div>
        <div className="bg-[#F3F8FA] border border-gray-300">
          <div className="bg-white p-5 border-b border-gray-300 flex flex-col gap-3">
            <h2 className="text-black text-2xl font-bold">
              {t("communication_history")}
            </h2>
            <p className="text-gray-400 font-normal text-base">
              {t("communication_note")}
            </p>
          </div>
          <div className="p-5 flex flex-col gap-5 overflow-y-auto h-[600px] ">
            {content}
          </div>
          <form
            onSubmit={handleSubmit}
            action=""
            className="w-full flex flex-col justify-between items-start bg-white p-5 gap-5"
          >
            <textarea
              name=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id=""
              rows={5}
              placeholder={t("enter_messsage_here")}
              className="rounded-lg outline-[#F3F8FA] p-3 focus:outline outline-4 w-full border border-gray-300"
            ></textarea>
            <button
              type="submit"
              disabled={message.length === 0}
              className={
                message.length > 0
                  ? "bg-[#ff7100] w-full md:w-60 px-10 py-3 rounded-md justify-center text-white text-base font-normal text-center hover:bg-[#F25900] flex items-center gap-2"
                  : "bg-gray-500 w-full md:w-60 px-10 py-3 rounded-md justify-center text-white text-base font-normal text-center cursor-not-allowed flex gap-2 items-center"
              }
            >
              {isCreatLoading ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 animate-spin"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  <p>{t("loading")}...</p>
                </>
              ) : (
                t("send")
              )}
            </button>
          </form>
        </div>
      </div>

      <Toaster />
    </div>
  ) : null;
}
CommunicationTab.propTypes = {
  id: PropTypes.any,
  sellerId: PropTypes.any,
};
export default CommunicationTab;
