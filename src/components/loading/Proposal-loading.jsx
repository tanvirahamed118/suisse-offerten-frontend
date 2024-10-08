function ProposalLoading() {
  return (
    <tr className="animate-pulse w-full">
      <td className="p-5 align-top text-left w-8/12">
        <div className="flex flex-col gap-5 items-start w-full">
          <div className="w-10/12 bg-slate-200 h-5"></div>
          <div className="w-4/12 bg-slate-200 h-5"></div>
          <div className="w-6/12 bg-slate-200 h-5"></div>
        </div>
      </td>
      <td className="p-5 w-4/12 align-top">
        <div className="animate-pulse bg-slate-200 h-5 rounded-md w-6/12"></div>
      </td>
    </tr>
  );
}

export default ProposalLoading;
