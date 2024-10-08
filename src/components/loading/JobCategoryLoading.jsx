function JobCategoryLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-white flex gap-5 p-5 h-40 items-center">
      <div className="animate-pulse bg-slate-200 w-[100px] rounded-md h-full"></div>
      <div className="animate-pulse flex flex-col gap-5 w-full h-auto items-center">
        <div className="w-full bg-slate-200 p-5 flex flex-col justify-between"></div>
        <div className="w-full bg-slate-200 p-5 flex flex-col justify-between"></div>
      </div>
    </div>
  );
}

export default JobCategoryLoading;
