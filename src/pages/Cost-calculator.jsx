import { useTranslation } from "react-i18next";

function CostCalculator() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container py-10">
        <div>
          <div>
            <h2 className="text-xl font-normal text-black">
              {t("cost_calculator")}
            </h2>
            <p className="text-black text-lg font-normal">
              {t("find_out_home_jobs_cost")}
            </p>
            <form
              action=""
              className="flex md:flex-row flex-col gap-2 md:gap-5 w-full py-5 items-center"
            >
              <input
                type="text"
                name=""
                placeholder={t("enter_a_tearm")}
                id=""
                className="border border-gray-200 px-2 py-1 rounded-md text-black text-base font-normal outline-[#C3DEED] focus:outline outline-4 w-11/12 md:w-[85%] md:px-4"
              />
              <button
                className="bg-[#ff730096] text-white font-normal rounded-md hover:bg-[#D96000] text-md py-2 px-5 w-11/12 md:w-[15%]"
                type="submit"
              >
                {t("calculate_costs")}
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-black text-lg font-normal">
              {t("popular_cost_calculator")}
            </h2>
            <div>
              <div className="flex flex-col md:flex-row md:gap-32">
                <ul className="flex flex-col gap-3 py-3 md:gap-1">
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Piano transport
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install cat door
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install lamps
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Sand and seal parquet
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Paint car
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Installation of auxiliary heating
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Change brakes
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install fence
                    </a>
                  </li>
                </ul>
                <ul className="flex flex-col gap-3 md:gap-1 py-3">
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Piano transport
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install cat door
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install lamps
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Sand and seal parquet
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Paint car
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Installation of auxiliary heating
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Change brakes
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install fence
                    </a>
                  </li>
                </ul>
                <ul className="flex flex-col gap-3 md:gap-1 py-3">
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Piano transport
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install cat door
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install lamps
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Sand and seal parquet
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Paint car
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Installation of auxiliary heating
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Change brakes
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                    >
                      Install fence
                    </a>
                  </li>
                </ul>
              </div>
              <a
                href=""
                className="text-[#3097d1] text-md font-normal border-b border-[#3c5b9e] hover:text-[#3c5b9e]"
              >
                All terms
              </a>
            </div>
            <h2 className="text-black text-lg font-normal mt-5">
              {t("recently_cost_calculator")}
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
              <ul className="flex flex-col gap-3 md:gap-1 py-3">
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Cleaning tiles - these are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Tiling stairs - these are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Disposal - These are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Cleaning - These are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Maintenance cleaning - These are the costs and prices
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-3 md:gap-1 py-3">
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Dispose of carpet - these are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Laying granite slabs - these are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Installing (split) air conditioning – the costs and prices
                    in Switzerland
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Plastering a wall - these are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Install heating - these are the costs and prices
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-3 md:gap-1 py-3">
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Demolition - These are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Installing the fence – an overview of the costs
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Installing a sectional door - these are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Installing a kitchen - these are the costs and prices
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-[#3097d1] text-md font-normal hover:border-b hover:border-[#3c5b9e] hover:text-[#3c5b9e]"
                  >
                    Removing the lawn - these are the costs and prices
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CostCalculator;
