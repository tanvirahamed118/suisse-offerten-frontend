function CategoryLoading() {
  return (
    <div className="shadow rounded-full w-40 h-40 border border-gray-3 bg-white flex flex-col gap-2 p-5 items-center justify-center">
      <div className="animate-pulse bg-slate-200 w-[50px] h-[50px] rounded-full"></div>
      <div className="w-full bg-slate-200 h-4 flex flex-col justify-between"></div>
    </div>
  );
}

export default CategoryLoading;
