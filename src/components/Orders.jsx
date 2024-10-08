function Orders() {
  return (
    <section className="bg-[#F5F6F7]">
      <div className="container company-image">
        <div className="flex flex-col gap-10 py-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-black font-bold text-3xl md:text-5xl">
              Looking for orders?
            </h2>
            <h3 className="text-black font-bold text-xl md:text-4xl">
              We have new customers for you!
            </h3>
            <ul className="flex flex-col gap-2 py-3">
              <li className="text-black text-lg font-normal">
                <i className="text-[#19BE10] fa-solid fa-circle-check"></i>{" "}
                +2500 orders per month
              </li>
              <li className="text-black text-lg font-normal">
                <i className="text-[#19BE10] fa-solid fa-circle-check"></i> Your
                company profile on all search engines
              </li>
              <li className="text-black text-lg font-normal">
                <i className="text-[#19BE10] fa-solid fa-circle-check"></i>{" "}
                Flexible monthly membership
              </li>
            </ul>
            <span>
              <h3 className="text-xl text-black font-bold custom-before relative md:text-2xl">
                CHF 118.- per month
              </h3>
              <h2 className="text-xl text-[#4C6DB2] font-bold md:text-3xl">
                CHF 0.- per month
              </h2>
            </span>
            <ul>
              <li className="text-black text-sm font-normal">
                Try us for free! You will receive 6 customer contacts for free
                as part of your trial membership.
              </li>
              <li className="text-black text-sm font-normal">
                You then decide for yourself whether you would like to become a
                member.
              </li>
            </ul>
            <a
              className="bg-[#ff7100] text-white font-normal rounded-md hover:bg-[#D96000] text-lg py-5 px-10"
              href=""
            >
              Join Now
            </a>
            <p className="text-[#666] text-sm font-normal mt-5">
              No obligations. Trial membership ends automatically after 1 month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders;
