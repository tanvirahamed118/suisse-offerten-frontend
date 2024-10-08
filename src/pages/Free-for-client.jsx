function FreeForClient() {
  return (
    <section>
      <div className="container py-5">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="w-full md:w-[25%]">
            <h2 className="text-black text-md font-normal">
              Information about Ofri
            </h2>
            <ul className="flex flex-col gap-2 py-2">
              <li>
                <a
                  href=""
                  className="text-gray-500 text-sm font-normal hover:underline"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-500 text-sm font-normal hover:underline"
                >
                  Condition
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-500 text-sm font-normal hover:underline"
                >
                  Imprint
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-gray-500 text-sm font-normal hover:underline"
                >
                  Data Protection
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[75%]">
            <h2 className="text-black text-xl font-normal">Free for clients</h2>
            <p className="text-black text-base font-normal">
              As a client, ofri is 100% free and non-binding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeForClient;
