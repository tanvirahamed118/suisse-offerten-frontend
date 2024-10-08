function SingleCategoryLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3 bg-white flex flex-col gap-2 p-5 items-center justify-center">
      <div className="animate-pulse bg-slate-200 w-full h-36 object-cover"></div>
      <div className="w-full bg-slate-200 h-6 flex flex-col justify-between"></div>
      <div className="w-full bg-slate-200 h-20 flex flex-col justify-between"></div>
    </div>
  );
}

export default SingleCategoryLoading;
