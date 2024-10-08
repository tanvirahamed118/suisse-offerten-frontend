function JobRecentlyLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-white p-5">
      <div className="animate-pulse bg-slate-200 w-full rounded-md h-5"></div>
      <div className="animate-pulse flex gap-3 w-full items-center mt-2">
        <div className="w-3/12 bg-slate-200 flex flex-col justify-between h-5"></div>
        <div className="w-9/12 bg-slate-200 flex flex-col justify-between h-5"></div>
      </div>
    </div>
  );
}

export default JobRecentlyLoading;
