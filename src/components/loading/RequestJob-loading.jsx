function RequestJobLoading() {
  return (
    <tr className="rounded-md w-full bg-white mt-5">
      <td className="p-5 w-6/12">
        <div className="animate-pulse bg-slate-200 rounded-md h-8"></div>
      </td>
      <td className="p-5 w-3/12">
        <div className="animate-pulse flex flex-col gap-3 items-center">
          <div className="w-full bg-slate-200 h-5"></div>
          <div className="w-full bg-slate-200 h-5"></div>
        </div>
      </td>
      <td className="p-5 w-3/12">
        <div className="animate-pulse flex flex-col gap-3 items-center">
          <div className="w-full bg-slate-200 h-5"></div>
          <div className="w-full bg-slate-200 h-5"></div>
          <div className="w-full bg-slate-200 h-5"></div>
        </div>
      </td>
    </tr>
  );
}

export default RequestJobLoading;
