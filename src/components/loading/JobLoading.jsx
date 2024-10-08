function JobLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-white flex flex-col gap-5 p-5 my-5">
      <div className="animate-pulse bg-slate-200 h-8 w-full rounded-md"></div>
      <div className="animate-pulse flex space-x-4 justify-between">
        <div className="w-4/12 bg-slate-200 p-5 flex flex-col justify-between"></div>
        <div className="flex flex-col gap-2 w-8/12">
          <h2 className="w-full h-8 rounded-md bg-slate-200"></h2>

          <p className="w-8/12 h-8 rounded-md  bg-slate-200"></p>
          <p className="w-8/12 h-8 rounded-md  bg-slate-200"></p>

          <p className="w-8/12 h-8 rounded-md bg-slate-200"></p>
        </div>
      </div>
    </div>
  );
}

export default JobLoading;
