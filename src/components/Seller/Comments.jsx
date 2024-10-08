import { useTranslation } from "react-i18next";

function Comments() {
  const { t } = useTranslation();
  return (
    <div className="">
      <h2 className="text-black text-xl font-bold">{t("comment")}</h2>
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
                    {t("comment")}
                  </h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="striped">
                <td className="p-5 align-top border-b border-black text-left">
                  <div className="flex flex-col gap-2">
                    <a
                      href=""
                      className="text-[#3097d1] hover:text-[#0050b2] text-lg font-normal hover:underline w-52"
                    >
                      Kitchen to be disposed of in Zurich
                    </a>
                    <p className="text-[#999] text-base font-normal">
                      8037 Zurich (Zurich)
                    </p>
                    <p className="text-[#999] text-base font-normal">
                      {t("order_number")}: 246799
                    </p>
                  </div>
                </td>
                <td className="p-5 align-top border-b border-black text-left">
                  <div className="flex flex-col gap-2 items-start">
                    <p className="text-black text-base font-normal">
                      March 20, 2024
                    </p>
                    <p className="text-black text-base font-normal">
                      Good day. Thank you for your offer. This is out of the
                      question for us and is too far out of our budget. Thank
                      you very much nonetheless.
                    </p>
                    <li className="list-none">
                      <a
                        href=""
                        className="text-[#3097d1] text-base font-normal hover:underline text-right"
                      >
                        {t("view_all_comments")}
                      </a>
                    </li>
                  </div>
                </td>

                <td className="p-5 align-top border-b border-black text-left">
                  <div className="flex flex-col gap-1 lg:items-end items-center">
                    <p className="text-black text-lg font-normal text-right">
                      {t("rating_not_yet")}
                    </p>
                    <p className="text-black text-sm pt-5 font-normal text-center w-full">
                      {t("tast_completed")}
                    </p>
                    <a
                      href=""
                      className="text-white bg-[#19be10] py-2 text-center w-60 rounded-md text-xs font-normal hover:bg-[#16A60E]"
                    >
                      {t("request_review")}
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

export default Comments;
