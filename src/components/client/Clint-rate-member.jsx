function ClintRateMember() {
  return (
    <div className="w-full">
      <h2 className="text-black text-xl font-bold">Rate member</h2>
      <h3 className="text-black text-xl font-normal pb-5 border-b-2 border-gray-300 mb-5">
        Ofri profile by yasink98
      </h3>
      <div className="border border-gray-200">
        <h2 className="text-black bg-[#F7F7F7] text-base font-normal p-3 border-b border-gray-200">
          Reviews by yasink98
        </h2>
        <hr />
        <h3 className="text-black text-base font-normal p-5">
          Average Rating: (no ratings)
        </h3>
      </div>
      <table className="w-full">
        <thead className="">
          <tr className="">
            <th className="p-3 text-left text-base text-black font-bold">
              comment
            </th>
            <th className="p-3 text-left text-base text-black font-bold">
              Rating of
            </th>
            <th className="p-3 text-left text-base text-black font-bold">
              Date
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#ECECEC] w-full">
          <tr>
            <td className="p-3 align-top">
              <a
                href=""
                className="text-[#3097d1] text-base font-normal hover:underline"
              >
                Relocation
              </a>
            </td>
            <td className="p-3 align-top">
              <span className="text-black text-base font-normal">
                <i className="fa fa-clock"></i> active
              </span>
              <p className="text-red-500">(order placed in 15 days 2 hours)</p>
            </td>
            <td className="p-3 align-top flex flex-col gap-1">
              <li className="w-full flex">
                <a
                  href=""
                  className="text-black bg-white py-2 rounded-md text-base font-medium w-full text-center border border-transparent hover:border hover:border-gray-500"
                >
                  View Order
                </a>
              </li>
              <p className="text-base font-normal text-black">
                Interested offerers: 10
              </p>
              <p className="text-base font-normal text-black">
                Offers requested: 1
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-3 align-top">
              <a
                href=""
                className="text-[#3097d1] text-base font-normal hover:underline"
              >
                Relocation
              </a>
            </td>
            <td className="p-3 align-top">
              <span className="text-black text-base font-normal">
                <i className="fa fa-clock"></i> active
              </span>
              <p className="text-red-500">(order placed in 15 days 2 hours)</p>
            </td>
            <td className="p-3 align-top flex flex-col gap-1">
              <li className="w-full flex">
                <a
                  href=""
                  className="text-black bg-white py-2 rounded-md text-base font-medium w-full text-center border border-transparent hover:border hover:border-gray-500"
                >
                  View Order
                </a>
              </li>
              <p className="text-base font-normal text-black">
                Interested offerers: 10
              </p>
              <p className="text-base font-normal text-black">
                Offers requested: 1
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-3 align-top">
              <a
                href=""
                className="text-[#3097d1] text-base font-normal hover:underline"
              >
                Relocation
              </a>
            </td>
            <td className="p-3 align-top">
              <span className="text-black text-base font-normal">
                <i className="fa fa-clock"></i> active
              </span>
              <p className="text-red-500">(order placed in 15 days 2 hours)</p>
            </td>
            <td className="p-3 align-top flex flex-col gap-1">
              <li className="w-full flex">
                <a
                  href=""
                  className="text-black bg-white py-2 rounded-md text-base font-medium w-full text-center border border-transparent hover:border hover:border-gray-500"
                >
                  View Order
                </a>
              </li>
              <p className="text-base font-normal text-black">
                Interested offerers: 10
              </p>
              <p className="text-base font-normal text-black">
                Offers requested: 1
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ClintRateMember;
