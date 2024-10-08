function ProviderLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-[#F5F8FA] flex p-5 justify-between items-center">
      <div className="w-full">
        <div className="flex gap-5 items-center w-full">
          <div className="animate-pulse bg-slate-200 h-4 w-3/12 rounded-md"></div>
          <div className="animate-pulse bg-slate-200 h-4 w-3/12 rounded-md"></div>
        </div>
        <div className="flex flex-col gap-3 w-full mt-5">
          <div className="animate-pulse bg-slate-200 h-4 w-3/12 rounded-md"></div>
          <div className="animate-pulse bg-slate-200 h-4 w-4/12 rounded-md"></div>
          <div className="animate-pulse bg-slate-200 h-4 w-4/12 rounded-md"></div>
          <div className="animate-pulse bg-slate-200 h-12 w-10/12 rounded-md"></div>
        </div>
      </div>
      <div className="animate-pulse flex flex-col gap-5 h-full justify-center items-center">
        <div className="w-52 bg-slate-200 p-5 flex flex-col justify-between"></div>
        <div className="w-52 bg-slate-200 p-5 flex flex-col justify-between"></div>
      </div>
    </div>
  );
}

export default ProviderLoading;
