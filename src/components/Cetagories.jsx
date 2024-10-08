import { Link } from "react-router-dom";
import { useGetAllCetagoryQuery } from "../redux/rtk/features/category/categoryApi";
import CategoryLoading from "./loading/Category-loading";

function Cetagories() {
  const { data, isLoading, isError } = useGetAllCetagoryQuery();

  // decide what to render
  let content;
  if (isLoading) {
    content = (
      <>
        <CategoryLoading />
        <CategoryLoading />
        <CategoryLoading />
        <CategoryLoading />
        <CategoryLoading />
        <CategoryLoading />
      </>
    );
  }
  if (!isLoading && !isError && data?.length === 0) {
    content = <p>Data not found!</p>;
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = data?.map((item) => {
      const { title, logo, _id } = item || {};
      return (
        <Link
          key={_id}
          to={`/service-category/${_id}`}
          className="flex flex-col gap-2 bg-[#FFAA00] items-center justify-center rounded-full hover:shadow-2xl md:w-40 md:h-40 w-32 h-32 m-auto"
        >
          <img src={logo} alt="" className="md:w-14 w-10" />
          <h2 className="text-black text-sm md:text-lg font-semibold text-center capitalize px-6">
            {title}
          </h2>
        </Link>
      );
    });
  }

  return (
    <section className="bg-[#E9E9E9] py-10">
      <div className="container">
        <div className="">
          <div className="grid grid-cols-2 xl:grid-cols-6 gap-5 md:gap-10 md:grid-cols-3 justify-center">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cetagories;
