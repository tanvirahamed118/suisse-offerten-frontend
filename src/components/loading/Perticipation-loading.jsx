function PerticipationLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-white p-5 flex justify-between">
      <div className="flex gap-5 items-center">
        <div className="animate-pulse bg-slate-200 w-24  rounded-md h-full"></div>
        <div className="animate-pulse flex gap-3 w-96 items-start flex-col mt-2">
          <div className="w-full bg-slate-200 flex flex-col justify-between h-5"></div>
          <div className="w-6/12 bg-slate-200 flex flex-col justify-between h-5"></div>
          <div className="w-6/12 bg-slate-200 flex flex-col justify-between h-5"></div>
        </div>
      </div>
      <div className="animate-pulse bg-slate-200 w-36 rounded-md h-5"></div>
    </div>
  );
}

export default PerticipationLoading;
