function MembershipLoading() {
  return (
    <div className="animate-pulse flex flex-col gap-5 border border-gray-300 p-5 rounded-md">
      <div className="flex flex-col gap-5 h-full">
        <div className=" bg-slate-200 h-5 w-full rounded-full"></div>
        <div className=" bg-slate-200 h-5 w-full rounded-full"></div>
        <div className=" bg-slate-200 h-5 w-full rounded-full"></div>
        <div className=" bg-slate-200 h-5 w-full rounded-md"></div>
      </div>
      <div className="w-full flex justify-center">
        <div className=" bg-slate-200 h-10 w-10/12 rounded-md"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className=" bg-slate-200 h-3 w-8/12 rounded-full"></div>
        <div className=" bg-slate-200 h-3 w-8/12 rounded-full"></div>
        <div className=" bg-slate-200 h-3 w-8/12 rounded-full"></div>
        <div className=" bg-slate-200 h-3 w-8/12 rounded-full"></div>
        <div className=" bg-slate-200 h-3 w-8/12 rounded-md"></div>
      </div>
    </div>
  );
}

export default MembershipLoading;
