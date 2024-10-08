function Business() {
  return (
    <section className="py-10 border-t border-gray-200 my-10">
      <div className="container flex flex-col gap-10 items-start">
        <h2 className="text-2xl text-black font-bold text-center">
          Check out the latest orders on Ofri!
        </h2>
        <a
          className="bg-[#ff7100] text-white font-normal py-5 px-14 rounded-md hover:bg-[#D96000] text-lg"
          href=""
        >
          View the latest orders now
        </a>
      </div>
      <div className="container py-10">
        <h2 className="text-2xl text-black font-bold">
          You too can expand your business efficiently with Ofri!
        </h2>
        <ul className="flex flex-col gap-2 pb-14 pt-6">
          <li className="text-black text-lg font-normal">
            <i className="text-[#19BE10] fa-solid fa-circle-check"></i> Expand
            your customer base and fill order gaps
          </li>
          <li className="text-black text-lg font-normal">
            <i className="text-[#19BE10] fa-solid fa-circle-check"></i> We will
            notify you of new orders by email
          </li>
          <li className="text-black text-lg font-normal">
            <i className="text-[#19BE10] fa-solid fa-circle-check"></i> Our
            customer support will be happy to help you by phone on
            <a href="">044 520 51 64</a> or by email at
            <a href="">support@ofri.ch</a> .
          </li>
        </ul>
        <a
          className="bg-[#ff7100] text-white font-normal py-5 px-14 rounded-md hover:bg-[#D96000] text-lg"
          href=""
        >
          Join Now
        </a>
        <p className="text-[#666] text-sm font-normal mt-14">
          No obligations. Trial membership ends automatically after 1 month.
        </p>
      </div>
    </section>
  );
}

export default Business;
