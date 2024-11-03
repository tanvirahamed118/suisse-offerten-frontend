function SellerPerticipateLoading() {
  return (
    <tr className="animate-pulse w-full h-52 border border-gray-300 border-t-0">
      <td className="p-5 align-top text-left w-4/12">
        <div className="flex flex-col gap-2 items-start w-full">
          <div className="w-10/12 bg-slate-200 h-5"></div>
          <div className="w-7/12 bg-slate-200 h-5"></div>
          <div className="w-5/12 bg-slate-200 h-5"></div>
        </div>
      </td>
      <td className="flex justify-between w-full">
        <div className="p-5 w-8/12 align-top flex flex-col gap-2">
          <div className="animate-pulse bg-slate-200 h-5 rounded-md w-10/12"></div>
          <div className="animate-pulse bg-slate-200 h-5 rounded-md w-8/12"></div>
        </div>
        <div className="p-5 w-4/12 align-top flex flex-col gap-2">
          <div className="animate-pulse bg-slate-200 h-8 rounded-md w-full"></div>
          <div className="animate-pulse bg-slate-200 h-8 rounded-md w-full"></div>
          <div className="w-full flex justify-end">
            <div className="animate-pulse bg-slate-200 h-5 rounded-md w-10/12"></div>
          </div>
          <div className="w-full flex justify-end">
            <div className="animate-pulse bg-slate-200 h-5 rounded-md w-4/12"></div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default SellerPerticipateLoading;
