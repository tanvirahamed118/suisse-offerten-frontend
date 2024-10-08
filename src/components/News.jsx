import Review from "../assets/images/home/haebi-ag-portrait.jpg";

function News() {
  return (
    <section>
      <div className="container py-10 md:py-20">
        <h2 className="text-black text-2xl font-bold text-center pb-10 md:text-4xl">
          Top craftsmen and service providers on Ofri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
          <div className="flex flex-col rounded-2xl">
            <img src={Review} alt="" className="w-full rounded-t-2xl" />
            <div className="flex flex-col gap-2 px-4 py-6 border border-gray-300 rounded-b-2xl">
              <span className="flex gap-0">
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
              </span>
              <span>
                <a
                  href="./pages/service-provider/review-profile.html"
                  className="text-base text-black font-bold"
                >
                  High-speed removals & transports
                </a>
                <p className="text-[#666] text-base font-normal">
                  Daniel Stirnimann
                </p>
              </span>
              <p className="text-[#666] text-base font-normal">
                Our offer includes private & commercial moves with transport
                insurance, clearances & disposal, final cleaning with delivery
                guarantee, transport & courier service.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl">
            <img src={Review} alt="" className="w-full rounded-t-2xl" />
            <div className="flex flex-col gap-2 px-4 py-6 border border-gray-300 rounded-b-2xl">
              <span className="flex gap-0">
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
              </span>
              <span>
                <h2 className="text-base text-black font-bold">
                  High-speed removals & transports
                </h2>
                <p className="text-[#666] text-base font-normal">
                  Daniel Stirnimann
                </p>
              </span>
              <p className="text-[#666] text-base font-normal">
                Our offer includes private & commercial moves with transport
                insurance, clearances & disposal, final cleaning with delivery
                guarantee, transport & courier service.
              </p>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl">
            <img src={Review} alt="" className="w-full rounded-t-2xl" />
            <div className="flex flex-col gap-2 px-4 py-6 border border-gray-300 rounded-b-2xl">
              <span className="flex gap-0">
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
                <i className="fa-solid fa-star text-[#FEB40C] text-xl"></i>
              </span>
              <span>
                <h2 className="text-base text-black font-bold">
                  High-speed removals & transports
                </h2>
                <p className="text-[#666] text-base font-normal">
                  Daniel Stirnimann
                </p>
              </span>
              <p className="text-[#666] text-base font-normal">
                Our offer includes private & commercial moves with transport
                insurance, clearances & disposal, final cleaning with delivery
                guarantee, transport & courier service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
