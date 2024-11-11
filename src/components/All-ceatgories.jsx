import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { choseId } from "../redux/rtk/features/formReucer/formSlice";

function AllCeatgories() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSelectId = (id) => {
    dispatch(choseId(id));
  };

  return (
    <section className="border-t border-gray-300 pt-28">
      <div className="container pb-10">
        <h2 className="text-black text-2xl font-bold text-center md:text-4xl">
          {t("all_categories")}
        </h2>
        <div className="py-14">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* outside */}
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("gardener_horticulture")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("paving_paths_roads")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("garage_doors")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("fences_gates_privacy_screens")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("garden_house_carport_sauna")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("excavation_earthworks_foundation")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("roofers_roofing")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("facade_scaffolding")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("metal_construction_metalworking_blacksmithing")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("blinds_roller_shutters_awnings")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("tinsmithing_sheet_metal_working")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("solar_photovoltaics")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("glass_construction_glazing")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("demolition_breakthrough_dismantling")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1004884940)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("conversion_total_renovation_extension")}
                </p>
              </Link>
              {/* outside */}

              {/* inside */}
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("painting_plastering")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("parquet_laminate_carpet")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("windows_Doors")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("slabs_tiles_slabs")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("bricklayer_plaster_concrete_joints")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("blinds_roller_shutters_awnings")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("conversion_total_renovation_extension")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("demolition_breakthrough_dismantling")}
                </p>
              </Link>

              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("carpentry_timber_construction")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("glass_construction_glazing")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("insulation_sealing_insulation")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("plumbing_work")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("bathroom_renovations")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("kitchen_constructor")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("carpenter_furniture")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("foils_labels")}</p>
              </Link>

              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("electrician_electrical_installation")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("upholstery_saddlery")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("heating_conditioning_refrigeration")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("metal_construction_metalworking_blacksmithing")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("locking_systems_alarm_systems")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("fireplace_chimney_fireplace")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1006566593)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("pest_control")}</p>
              </Link>
              {/* inside */}

              {/* planing */}
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1008649487)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("architecture_planning_statics")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1008649487)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("solar_photovoltaics")}</p>
              </Link>

              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1008649487)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("heating_conditioning_refrigeration")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1008649487)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("gardener_horticulture")}</p>
              </Link>
              {/* planing */}

              {/* car */}
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1009692966)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("car_repair_car_service")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1009692966)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("motorcycle_vespa_scooter")}
                </p>
              </Link>

              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1009692966)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("foils_labels")}</p>
              </Link>

              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1009692966)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("car_painting_smar_repair")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1009692966)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("transports_small_transports")}
                </p>
              </Link>
              {/* car */}

              {/* moving */}
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(3290426656)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("moving_moving_house")}</p>
              </Link>
              {/* moving */}

              {/* cleaning */}
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1014170444)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("final_cleaning_moving_cleaning")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1014170444)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("cleaner_other_cleaning")}</p>
              </Link>
              {/* cleaning */}

              {/* transport */}
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(6972719352)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("transports_small_transports")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(6972719352)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("disposal_clearing_out")}</p>
              </Link>
              {/* transport */}

              {/* other */}
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1017268119)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("telephone_Internet_Multimedia")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1017268119)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">
                  {t("glass_construction_glazing")}
                </p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1017268119)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("foils_labels")}</p>
              </Link>
              <Link
                to="/enter-request"
                onClick={() => handleSelectId(1017268119)}
                className="text-[#111] hover:text-[#4C6DB2] text-lg font-bold flex items-center gap-3"
              >
                <i className="fa-solid fa-arrow-right text-[#4C6DB2]"></i>
                <p className="hover:underline">{t("other")}</p>
              </Link>
              {/* other */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllCeatgories;
