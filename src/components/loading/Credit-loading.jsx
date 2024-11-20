function CreditLoading() {
  return (
    <div className="animate-pulse flex flex-col gap-5 border border-gray-300 p-5 rounded-md">
      <div className="flex flex-col gap-5 h-full">
        <div className="bg-slate-200 h-24 w-full rounded-md"></div>
        <div className="bg-slate-200 h-5 w-full rounded-md"></div>
        <div className="bg-slate-200 h-10 w-full rounded-md"></div>
      </div>
    </div>
  );
}

export default CreditLoading;
