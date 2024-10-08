function CreditHistory() {
  return (
    <div className="">
      <h2 className="text-black text-xl font-bold border-b border-gray-500 pb-2">
        Credits history
      </h2>
      <form action="" className="flex gap-2 items-center py-6">
        <label htmlFor="">Period</label>
        <input
          type="date"
          name=""
          id=""
          className="w-full border bg-[#d4dbe0] border-gray-200 px-2 py-1.5 rounded-lg text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4"
        />
        <button
          type="submit"
          className="text-white bg-[#f25900] py-2 w-52 text-center text-base font-normal rounded-lg"
        >
          <i className="fa fa-search"></i> Search
        </button>
      </form>
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="border-b border-black">
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">Date</h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">transaction</h2>
                </th>
                <th className="p-5 align-middle border-b border-black text-left">
                  <h2 className="text-black text-lg font-bold">Credits</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="striped">
                <td className="p-5 align-top border-b border-black text-left">
                  <p className="text-black font-normal text-base">2024-03-27</p>
                </td>

                <td className="p-5 align-top border-b border-black text-left">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2 items-center">
                      <i className="fa fa-sync-alt"></i>
                      <p className="text-black font-normal text-base">
                        Periodic credits
                      </p>
                    </div>
                    <a
                      href=""
                      className="text-[#3097d1] text-sm font-normal hover:underline"
                    >
                      Transport heavy table
                    </a>
                    <p className="text-black font-normal text-base">
                      Lead price: 2
                    </p>
                    <p className="text-black font-normal text-base">
                      Credits used: Periodic credits credit
                    </p>
                  </div>
                </td>

                <td className="p-5 align-top border-b border-black w-16">
                  <div className="flex">
                    <p className="font-normal text-base bg-green-400 rounded-md p-2 text-white">
                      +50
                    </p>
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

export default CreditHistory;
