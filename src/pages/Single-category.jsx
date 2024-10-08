import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useGetOneCetagoryQuery } from "../redux/rtk/features/category/categoryApi";
import SingleCategoryLoading from "../components/loading/Single-category";
function SingleCategory() {
  const { t } = useTranslation();
  const params = useParams();
  const { id } = params;
  const { data, isLoading } = useGetOneCetagoryQuery(id);

  const { title, lists, logo, category, image } = data || {};
  console.log(lists);
  let content;
  if (isLoading) {
    content = (
      <>
        <SingleCategoryLoading />
        <SingleCategoryLoading />
        <SingleCategoryLoading />
        <SingleCategoryLoading />
        <SingleCategoryLoading />
        <SingleCategoryLoading />
      </>
    );
  }
  if (!isLoading) {
    content = lists?.map((item) => {
      const { title, description, banner } = item || {};
      return (
        <div key={title} className="bg-white">
          <span className="flex flex-col gap-2 items-center justify-center p-10">
            <h2 className="text-xl font-medium text-[#111111] capitalize">
              {title}
            </h2>
            <p className="text-base font-normal text-[#111111]">
              {description}
            </p>
          </span>
          <img
            src={banner}
            alt=""
            className="w-full lg:h-80 h-52 object-cover"
          />
        </div>
      );
    });
  }
  return (
    <section>
      <div className="relative w-full h-96">
        <img
          src={image}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 bg-[#00000069] w-full h-full flex flex-col gap-3 justify-center">
          <div className="container">
            <h2 className="text-white text-[4rem] font-bold">{title}</h2>
            <span className="flex gap-2 items-center mt-5">
              <Link
                to="/"
                className="text-white font-medium text-base hover:text-blue-400 hover:underline"
              >
                {t("home")}
              </Link>
              <Link className="text-white font-medium text-base">/</Link>
              <p className="text-white font-medium text-base">{title}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#EEF4F6]">
        <div className="container py-20">
          <div className="flex items-center gap-5">
            <span className="bg-[#FFAA00] w-16 h-16 flex items-center justify-center rounded-full">
              <img src={logo} alt="" className="w-10 h-10 text-xl text-white" />
            </span>
            <p className="text-[#111111] font-medium text-md tracking-[5px] uppercase">
              {category}
            </p>
          </div>
          <div className="py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-0">
            <h2 className="text-[#111111] text-5xl font-bold">
              {t("can_help_one")} <br />
              {t("can_help_tow")}
            </h2>
            <Link
              to="/search-job"
              className="bg-[#FFAA00] py-3 hover:underline px-10 rounded-3xl uppercase text-base font-medium text-white w-ful text-center"
            >
              {t("see_all_jobs")}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {content}
          </div>
        </div>
      </div>
      <div className="container py-28">
        <h2 className="text-5xl font-bold text-[#111111] text-center w-10/12 m-auto">
          {t("category_text_one")}
        </h2>
        <div className="flex md:flex-row flex-col gap-10 items-center mt-28">
          <div className="flex flex-col gap-3 items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 p-5 xl:p-10">
            <i className="fa-solid fa-people-roof text-[#FFAA00] text-5xl"></i>
            <h3 className="text-2xl font-bold text-center text-[#111111]">
              {t("category_text_tow")}
            </h3>
            <p className="text-[#111111] text-base font-normal text-center">
              {t("category_text_three")}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 p-5 xl:p-10">
            <i className="fa-regular fa-clock text-[#FFAA00] text-5xl"></i>
            <h3 className="text-2xl font-bold text-center text-[#111111]">
              {t("category_text_four")}
            </h3>
            <p className="text-[#111111] text-base font-normal text-center">
              {t("category_text_five")}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center p-5 xl:p-10">
            <i className="fa-solid fa-piggy-bank text-[#FFAA00] text-5xl"></i>
            <h3 className="text-2xl font-bold text-center text-[#111111]">
              {t("category_text_six")}
            </h3>
            <p className="text-[#111111] text-base font-normal text-center">
              {t("category_text_saven")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center border-t border-gray-300 py-20 px-10 md:px-0">
        <h2 className="text-5xl font-bold text-[#111111] text-center w-10/12 m-auto">
          {t("category_text_eight")}
        </h2>
        <p className="text-[#111111] text-xl font-normal text-center">
          {t("category_text_nine")}
        </p>
        <Link
          to="/contact"
          className="bg-[#FFAA00] py-3 hover:underline px-10 rounded-3xl uppercase text-base font-medium text-white"
        >
          {t("category_text_ten")}
        </Link>
      </div>
    </section>
  );
}

export default SingleCategory;
