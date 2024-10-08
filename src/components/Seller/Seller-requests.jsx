import { useTranslation } from "react-i18next";

function SellerRequests() {
  const { t } = useTranslation();
  return (
    <div className="">
      <h2 className="text-black text-xl font-bold border-b border-gray-500 pb-2">
        {t("requests")}
      </h2>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-black">
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("order_title")}
                  </h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("status")}
                  </h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">
                    {t("activity")}
                  </h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="striped">
                <td className="p-5 align-top border-b border-black text-left">
                  <a
                    href=""
                    className="text-[#3097d1] hover:text-[#0050b2] text-lg font-normal hover:underline w-52"
                  >
                    {t("data_entry")}
                  </a>
                </td>
                <td className="p-5 align-top border-b border-black text-left">
                  <div className="flex gap-2 items-center">
                    <i className="fa fa-clock"></i>
                    <p className="text-black font-normal text-base">
                      {t("rejected")}
                    </p>
                  </div>
                </td>

                <td className="p-5 align-top border-b border-black w-52">
                  <div className="flex">
                    <a
                      href=""
                      className="text-black bg-white border border-gray-300 py-2 text-center rounded-md text-base font-normal hover:border-gray-500 w-52"
                    >
                      {t("view_order")}
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="">
        <div className="flex gap-2 flex-wrap pt-5">
          <button className="border border-gray-300 py-1 px-5 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            Back
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-3 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            1
          </button>
          <button className="border border-gray-300 py-1 px-5 rounded-md text-[#3097D1] text-base font-normal hover:bg-[#D4DBE0]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellerRequests;
