function SingleJobLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-white p-5 flex flex-col gap-5">
      <div className="animate-pulse bg-slate-200 w-full rounded-md h-5"></div>
      <div className="flex gap-3 items-center">
        <div className="w-full bg-slate-200 flex flex-col justify-between h-5"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-5"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-5"></div>
      </div>
      <div className="animate-pulse flex gap-3 items-center">
        <div className="w-full bg-slate-200 flex flex-col justify-between h-20"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-20"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-20"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-20"></div>
      </div>
      <div className="animate-pulse flex gap-3 w-full flex-col items-center mt-2 h-auto">
        <div className="w-full bg-slate-200 flex flex-col justify-between h-32"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-32"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-32"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-32"></div>
        <div className="w-full bg-slate-200 flex flex-col justify-between h-32"></div>
      </div>
    </div>
  );
}

export default SingleJobLoading;
