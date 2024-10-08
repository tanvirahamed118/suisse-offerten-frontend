function ReviewLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-white mt-5">
      <div className="flex gap-5 items-center px-5 pt-5">
        <div className="animate-pulse bg-slate-200 rounded-md h-5 w-40 justify-self-end"></div>
        <div className="animate-pulse bg-slate-200 rounded-md h-5 w-40 justify-self-end"></div>
      </div>
      <div className="flex flex-col gap-3 my-3 px-5">
        <div className="animate-pulse bg-slate-200 rounded-md h-5 w-full justify-self-end"></div>
        <div className="animate-pulse bg-slate-200 rounded-md h-5 w-full justify-self-end"></div>
        <div className="animate-pulse bg-slate-200 rounded-md h-5 w-full justify-self-end"></div>
      </div>
      <div className="flex gap-5 items-center border-t border-gray-300 py-3 p-5">
        <div className="animate-pulse bg-slate-200 rounded-md h-5 w-40 justify-self-end"></div>
        <div className="animate-pulse bg-slate-200 rounded-md h-5 w-40 justify-self-end"></div>
      </div>
    </div>
  );
}

export default ReviewLoading;
