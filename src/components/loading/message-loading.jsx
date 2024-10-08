function MessageLoading() {
  return (
    <div className="shadow rounded-md w-full border border-gray-3=200 bg-white  p-5 h-96 mt-5">
      <div className="grid justify-items-stretch gap-5">
        <div className="animate-pulse bg-slate-200 rounded-md h-10 w-40 justify-self-end"></div>
        <div className="animate-pulse bg-slate-200 rounded-md h-10 w-40 justify-self-start"></div>
        <div className="animate-pulse bg-slate-200 rounded-md h-10 w-40 justify-self-end"></div>
        <div className="animate-pulse bg-slate-200 rounded-md h-10 w-40 justify-self-start"></div>
      </div>
    </div>
  );
}

export default MessageLoading;
