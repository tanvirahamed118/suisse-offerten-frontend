import React from "react";
import News from "../components/News";

function Contractor() {
  return (
    <React.Fragment>
      <section>
        <div className="container py-5">
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="w-full md:w-[25%]">
              <ul className="flex flex-col gap-2 py-2">
                <li>
                  <a
                    href=""
                    className="text-gray-500 text-sm font-bold hover:underline"
                  >
                    Heres how it works
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 text-sm font-normal hover:underline"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 text-sm font-normal hover:underline"
                  >
                    Condition
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 text-sm font-normal hover:underline"
                  >
                    Imprint
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 text-sm font-normal hover:underline"
                  >
                    Data Protection
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-[75%]">
              <div>
                <h2 className="text-black text-5xl font-bold">
                  Heres how it works
                </h2>
                <p className="text-black text-base font-normal">
                  Ofri has designed the best solution for you as a
                  tradesman/service provider so that you can further expand your
                  business - and in a convenient way! In just a few minutes you
                  can look through requests for offers in your industry and
                  submit offers free of charge.
                </p>
              </div>
              <div className="flex flex-col gap-10 py-10">
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col gap-5">
                    <h2 className="text-2xl text-black font-normal">
                      register now
                    </h2>
                    <span>
                      <p className="text-black text-base font-normal">
                        Register for free with a basic package or opt for the
                        premium package with numerous benefits for CHF 118 per
                        month.
                      </p>
                      <a
                        href=""
                        className="text-base text-[#3097d1] font-normal"
                      >
                        <i className="fa-solid fa-angles-right text-black"></i>
                        Compare prices and packages now
                      </a>
                    </span>
                  </div>
                  <img
                    src="../images/about/register-3281449d861319530819.png"
                    alt=""
                    className="w-4/12"
                  />
                </div>
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col gap-5">
                    <h2 className="text-2xl text-black font-normal">
                      Receive free quote requests
                    </h2>
                    <span>
                      <p className="text-black text-base font-normal">
                        Once registered, you will receive free quote requests
                        from your industry and region. You can read the offer
                        requests directly on ofri, or be notified conveniently
                        by email .
                      </p>
                    </span>
                  </div>
                  <img
                    src="../images/about/new_jobs-75fef12543460a6d6cb5.png"
                    alt=""
                    className="w-4/12"
                  />
                </div>
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col gap-5">
                    <h2 className="text-2xl text-black font-normal">
                      Get more visitors
                    </h2>
                    <span>
                      <p className="text-black text-base font-normal">
                        Your company will be listed free of charge in the ofri
                        online directory. Potential clients can contact your
                        company directly and you receive additional traffic for
                        your company website via the most important search
                        engines in Switzerland. A weekly report via email also
                        shows you how many clicks and views your profile
                        receives.
                      </p>
                    </span>
                  </div>
                  <img
                    src="../images/about/search_logos-7aef1f211590d1e7bffe.png"
                    alt=""
                    className="w-4/12"
                  />
                </div>
                <div className="flex gap-5 items-center">
                  <div className="flex flex-col gap-5">
                    <h2 className="text-2xl text-black font-normal">
                      Stand out from the crowd
                    </h2>
                    <span>
                      <p className="text-black text-base font-normal">
                        We give you all the tools to differentiate yourself from
                        your competitors. Collect reviews for completed jobs,
                        add pictures and work examples to your profile or have
                        diplomas and business liability verified with us.
                      </p>
                    </span>
                  </div>
                  <img
                    src="../images/about/ratings-e792b34806f1d591127e.png"
                    alt=""
                    className="w-4/12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <News />
    </React.Fragment>
  );
}

export default Contractor;
