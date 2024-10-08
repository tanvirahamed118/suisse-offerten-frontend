import { useTranslation } from "react-i18next";

function Bills() {
  const { t } = useTranslation();

  return (
    <div className="">
      <h2 className="text-black text-base font-bold mt-10 border-b border-gray-400 pb-2">
        {t("open_invoice")}
      </h2>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-black">
                <th className="py-5 px-2 align-middle text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("invoice_number")}.
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("news_date")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("remainder_status")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("invoice_ammount")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("invoice_paid")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("download")}
                  </h2>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <h2 className="text-black text-base font-bold mt-10 border-b border-gray-400 pb-2">
        {t("paid_bills")}
      </h2>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-black">
                <th className="py-5 px-2 align-middle text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("invoice_number")}.
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("news_date")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("remainder_status")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("invoice_ammount")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("invoice_paid")}
                  </h2>
                </th>
                <th className="py-5 px-2 align-middle border-b border-black text-left">
                  <h2 className="text-black text-base font-normal">
                    {t("download")}
                  </h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="striped">
                <td className="py-5 px-2 align-top border-b border-black text-left">
                  <div className="flex gap-5 items-start">
                    <a
                      href=""
                      className="text-[#3097d1] hover:text-[#0050b2] text-base font-normal hover:underline"
                    >
                      20240201060100059694
                    </a>
                  </div>
                </td>
                <td className="py-5 px-2 align-top border-b border-black text-left">
                  <p className="text-black text-base font-normal">02/28/2024</p>
                </td>

                <td className="py-5 px-2 align-top border-b border-black text-left">
                  <div className="">
                    <p className="text-black text-base font-normal">due</p>
                  </div>
                </td>
                <td className="py-5 px-2 align-top border-b border-black text-left">
                  <div className="">
                    <p className="text-black text-base font-normal">
                      CHF 127.55
                    </p>
                  </div>
                </td>
                <td className="py-5 px-2 align-top border-b border-black text-left">
                  <div className="">
                    <p className="text-black text-base font-normal">Paid</p>
                  </div>
                </td>
                <td className="py-5 px-2 align-top border-b border-black text-left">
                  <div className="">
                    <a
                      href=""
                      className="text-[#3097d1] hover:text-[#0050b2] text-base font-normal hover:underline"
                    >
                      PDF
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
            {t("back")}
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
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bills;
