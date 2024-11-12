import ClientLogin from "./client/Client-Login";
import SellerLogin from "./seller/Seller-Login";

function MainLogin() {
  return (
    <section className="">
      <div className="container flex lg:flex-row flex-col justify-around items-center">
        <ClientLogin />
        <hr className="w-[1px] h-0 md:h-[70vh] bg-gray-300 lg:block hidden" />
        <SellerLogin />
      </div>
    </section>
  );
}

export default MainLogin;
