function ProposalTableLoading() {
  return (
    <div className="shadow flex flex-col gap-5 rounded-md w-full md:w-[600px] border border-gray-3=200 bg-white  p-10 h-auto mt-5">
      <div className="animate-pulse flex gap-5 items-center">
        <div className="bg-slate-200 rounded-md h-5 w-full"></div>
        <div className="bg-slate-200 rounded-md h-5 w-full"></div>
        <div className="bg-slate-200 rounded-md h-5 w-full"></div>
        <div className="bg-slate-200 rounded-md h-5 w-full"></div>
      </div>
      <table className="animate-pulse flex flex-col gap-3">
        <tr className="flex gap-5">
          <th className="bg-slate-200 rounded-md h-10 w-full"></th>
          <td className="bg-slate-200 rounded-md h-10 w-full"></td>
        </tr>
        <tr className="flex gap-5">
          <th className="bg-slate-200 rounded-md h-10 w-full"></th>
          <td className="bg-slate-200 rounded-md h-10 w-full"></td>
        </tr>
        <tr className="flex gap-5">
          <th className="bg-slate-200 rounded-md h-10 w-full"></th>
          <td className="bg-slate-200 rounded-md h-10 w-full"></td>
        </tr>
        <tr className="flex gap-5">
          <th className="bg-slate-200 rounded-md h-10 w-full"></th>
          <td className="bg-slate-200 rounded-md h-10 w-full"></td>
        </tr>
        <tr className="flex gap-5">
          <th className="bg-slate-200 rounded-md h-10 w-full"></th>
          <td className="bg-slate-200 rounded-md h-10 w-full"></td>
        </tr>
        <tr className="flex gap-5">
          <th className="bg-slate-200 rounded-md h-10 w-full"></th>
          <td className="bg-slate-200 rounded-md h-10 w-full"></td>
        </tr>
      </table>
      <div className="animate-pulse w-3/12">
        <div className=" bg-slate-200 rounded-md h-10 w-full justify-self-end"></div>
      </div>
    </div>
  );
}

export default ProposalTableLoading;
