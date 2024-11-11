function LocationLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-white flex flex-col gap-5 p-5 my-5">
      <div className="animate-pulse flex md:flex-row flex-col md:items-start items-center gap-5 justify-between">
        <div className="rounded-full bg-slate-200 flex flex-col justify-between w-36 h-36"></div>
        <div className="flex flex-col gap-2 w-full md:w-10/12">
          <h2 className="w-full h-8 rounded-md bg-slate-200"></h2>
          <div className="flex gap-2">
            <p className="w-full h-8 rounded-md  bg-slate-200"></p>
            <p className="w-full h-8 rounded-md  bg-slate-200"></p>
            <p className="w-full h-8 rounded-md bg-slate-200"></p>
            <p className="w-full h-8 rounded-md bg-slate-200"></p>
          </div>
          <p className="w-full h-16 rounded-md  bg-slate-200"></p>
          <p className="w-full h-8 rounded-md  bg-slate-200"></p>
          <p className="w-full h-16 rounded-md bg-slate-200"></p>
        </div>
      </div>
    </div>
  );
}

export default LocationLoading;
