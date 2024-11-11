import { useParams } from "react-router-dom";
import { useSellerEmailValidateQuery } from "../redux/rtk/features/auth/seller/authApi";
import EmailVerifyLoading from "./loading/Email-verify-loading";

function EmailValidation() {
  const params = useParams();
  const token = params.token;
  const { data, isError, isSuccess, error, isLoading } =
    useSellerEmailValidateQuery(token);

  // decide what to render
  let content;
  if (isLoading) content = <EmailVerifyLoading />;
  if (isError)
    content = (
      <>
        <i className="fa-solid fa-circle-xmark text-[60px] text-red-500"></i>
        <p className="text-xl font-medium text-black">{error?.data?.message}</p>
      </>
    );
  if (isSuccess && data?.message) {
    content = (
      <>
        <i className="fa-solid fa-circle-check text-[60px] text-green-500"></i>
        <p className="text-xl font-medium text-black">{data?.message}</p>
      </>
    );
  }

  return (
    <div className="w-full h-[800px] flex flex-col gap-5 justify-center items-center">
      {content}
    </div>
  );
}

export default EmailValidation;
