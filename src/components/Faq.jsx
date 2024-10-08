function Faq() {
  return (
    <section>
      <div className="container">
        <h2 className="text-2xl text-black font-bold text-center md:text-4xl">
          Frequently asked questions about membership
        </h2>
        <div className="flex flex-col gap-2 py-10">
          <div className="flex flex-col gap-3 border border-gray-200 p-6 rounded-2xl">
            <h2 className="text-black text-lg font-bold">
              How does the trial membership work?
            </h2>
            <p className="text-black text-base font-normal">
              Try the premium membership completely free until you have received
              6 confirmed contact requests including contact details, or for 1
              month, whichever comes first. During the trial period you have
              access to all functions and services.
            </p>
          </div>
          <div className="flex flex-col gap-3 border border-gray-200 p-6 rounded-2xl">
            <h2 className="text-black text-lg font-bold">
              Does the trial membership extend automatically?
            </h2>
            <p className="text-black text-base font-normal">
              No. The trial membership has no obligations and ends
              automatically.
            </p>
          </div>
          <div className="flex flex-col gap-3 border border-gray-200 p-6 rounded-2xl">
            <h2 className="text-black text-lg font-bold">
              Which notice periods must be observed?
            </h2>
            <p className="text-black text-base font-normal">
              You dont have to do anything for the free trial membership; it
              ends automatically. If you are convinced of Ofri and would like to
              keep the premium membership, you can do so after the test phase
              for CHF 118 per month. subscribe to. The premium membership is
              extended by 1 month each month and you can always cancel it
              monthly no later than 21 days before the next extension.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
