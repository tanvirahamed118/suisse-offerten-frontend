function ProviderLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-[#F5F8FA] flex md:flex-row flex-col gap-3 p-5 justify-between items-center">
      <div className="md:w-10/12 w-full">
        <div className="flex gap-5 items-center w-full">
          <div className="animate-pulse bg-slate-200 h-4 w-6/12 md:w-3/12 rounded-md"></div>
          <div className="animate-pulse bg-slate-200 h-4 w-6/12 md:w-3/12 rounded-md"></div>
        </div>
        <div className="flex flex-col gap-3 w-full mt-5">
          <div className="animate-pulse bg-slate-200 h-4 w-full md:w-3/12 rounded-md"></div>
          <div className="animate-pulse bg-slate-200 h-4 w-full md:w-4/12 rounded-md"></div>
          <div className="animate-pulse bg-slate-200 h-4 w-full md:w-4/12 rounded-md"></div>
          <div className="animate-pulse bg-slate-200 h-12 w-full md:w-10/12 rounded-md"></div>
        </div>
      </div>
      <div className="animate-pulse flex flex-col gap-2 md:gap-5 h-full justify-center items-center w-full md:w-2/12">
        <div className="w-full bg-slate-200 p-5 flex flex-col justify-between"></div>
        <div className="w-full bg-slate-200 p-5 flex flex-col justify-between"></div>
        <div className="w-full bg-slate-200 p-5 flex flex-col justify-between"></div>
      </div>
    </div>
  );
}

export default ProviderLoading;
