import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EnterCompany from "./pages/Enrer-company";
import CostCalculator from "./pages/Cost-calculator";
import SearchOrder from "./pages/Search-order";
import About from "./pages/About";
import Condition from "./pages/Condition";
import Contact from "./pages/Contact";
import Contractor from "./pages/Contractor";
import DataProtection from "./pages/Data-protecttion";
import FreeForClient from "./pages/Free-for-client";
import HowItWorksClient from "./pages/How-it-works-clients";
import Imprint from "./pages/Imprint";
import Location from "./pages/Location";
import SingleOffer from "./pages/Single-offer";
import ClientDashboard from "./pages/client/Client-dashboard";
import Credit from "./pages/seller/Credit";
import SellerPeviewProfile from "./pages/seller/Seller-review-profile";
import SellerDashboard from "./pages/seller/Seller-dashboard";
import ClientRequest from "./components/client/Client-request";
import ClientPersonalInfo from "./components/client/Client-personal-info";
import NewLeads from "./components/Seller/New-leads";
import Perticipation from "./components/Seller/Perticipation";
// import SellerOffer from "./components/Seller/Seller-offer";
import Comments from "./components/Seller/Comments";
import Observer from "./components/Seller/Observer";
import SellerNews from "./components/Seller/Seller-news";
import Bills from "./components/Seller/Bills";
import SellerActivity from "./components/Seller/Seller-activity";
import VerifyDocuments from "./components/Seller/Verify-documents";
import SellerRequests from "./components/Seller/Seller-requests";
import DashboardReviews from "./components/Seller/Dashboard-reviews";
import PersonalInfo from "./components/Seller/Personal-info";
import SellerCredits from "./components/Seller/Seller-credits";
import CompanyProfile from "./components/Seller/Company-profile";
import SellerRegister from "./pages/seller/Seller-register";
import LoginForm from "./components/Login-form";
import ClientRegister from "./pages/client/Client-register";
import HowItWorksContractor from "./pages/How-it-works-contractor";
import PrivateRoute from "./routes/Private-route";
import PublicRoute from "./routes/Public-route";
import SellerReset from "./pages/seller/Seller-reset";
import SellerCheckOTP from "./pages/seller/Seller-check-otp";
import SellerChangePassword from "./pages/seller/Seller-change-password";
import ClientReset from "./pages/client/Client-reset";
import ClientCheckOTP from "./pages/client/Client-check-otp";
import ClientChangePassword from "./pages/client/Client-change-password";
import RequestRoute from "./routes/request-route";
import BiddingForm from "./components/Bidding-form";
import PrepeardForm from "./components/Prepeard-form";
import OfferRoute from "./routes/offer-route";
import Proposal from "./pages/client/Proposal";
import ProposalProfile from "./pages/client/Proposal-profile";
import ClientFeedback from "./components/client/client-feedback";
import UpdateProposal from "./components/Seller/Update-proposal";
import OfferOpen from "./components/Seller/Offer-open";
import OfferComplete from "./components/Seller/Offer-complete";
import OfferArchived from "./components/Seller/Offer-archived";
import SingleNews from "./components/Seller/Single-news";
import EmailValidation from "./components/Email-validation";
import Membership from "./pages/seller/Membership";
import PaymentSuccess from "./components/Seller/Payment-success";
import PaymentFail from "./components/Seller/Payment-fail";
import ClinetVarify from "./pages/client/Clinet-varify";
import CreditPaymentSuccess from "./components/Seller/CreditPayment-success";
import CreditPaymentFail from "./components/Seller/CreditPayment-fail";
import { useEffect } from "react";
import { useGetAllSettingQuery } from "./redux/rtk/features/setting/settingApi";
import OfferWon from "./components/Seller/OfferWon";
import Error404 from "./pages/Error404";
import CreateJob from "./pages/Create-job";
import MainLogin from "./pages/Main-login";

function App() {
  const { data, isLoading } = useGetAllSettingQuery();

  const { favicon, heading } = data || {};

  useEffect(() => {
    if (isLoading) {
      document.title =
        "Suisse Offerten || Kostenlose Handwerker-Angebote: Holen Sie sich";
    } else {
      document.title = heading;
    }
    const faVIcon = document.querySelector("link[rel='icon']");

    if (favicon) {
      faVIcon.href = favicon;
    } else {
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href = "/new-favicon.ico";
      document.head.appendChild(newFavicon);
    }
  }, [heading, favicon, isLoading]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Auth routes */}
        <Route element={<PublicRoute />}>
          <Route path="/client-register" element={<ClientRegister />} />
          <Route path="/company-register" element={<SellerRegister />} />
          <Route path="/auth-login" element={<MainLogin />} />

          <Route path="/seller-reset" element={<SellerReset />} />
          <Route path="/seller-check-otp" element={<SellerCheckOTP />} />
          <Route
            path="/seller-change-password"
            element={<SellerChangePassword />}
          />
          <Route path="/client-reset" element={<ClientReset />} />
          <Route path="/verify-email" element={<ClinetVarify />} />
          <Route path="/client-check-otp" element={<ClientCheckOTP />} />
          <Route
            path="/client-change-password"
            element={<ClientChangePassword />}
          />
        </Route>
        {/* Auth routes */}

        {/* Client routes */}
        <Route element={<PrivateRoute role="client" />}>
          <Route path="/client-dashboard" element={<ClientDashboard />}>
            <Route path="/client-dashboard" element={<ClientRequest />} />
            <Route
              path="/client-dashboard/review"
              element={<ClientFeedback />}
            />
            <Route
              path="/client-dashboard/profile"
              element={<ClientPersonalInfo />}
            />
          </Route>
          <Route path="/proposal/:id" element={<Proposal />} />
          <Route
            path="/proposal/seller/:sellerId/:jobId"
            element={<ProposalProfile />}
          />
        </Route>
        {/* Client routes */}

        {/* seller routes */}
        <Route element={<PrivateRoute role="seller" />}>
          <Route path="/seller-dashboard" element={<SellerDashboard />}>
            <Route path="/seller-dashboard" element={<NewLeads />} />
            <Route
              path="/seller-dashboard/perticipation"
              element={<Perticipation />}
            />
            <Route
              path="/seller-dashboard/perticipation/:id"
              element={<UpdateProposal />}
            />
            <Route
              path="/seller-dashboard/offers-open"
              element={<OfferOpen />}
            />
            <Route path="/seller-dashboard/offers-won" element={<OfferWon />} />

            <Route
              path="/seller-dashboard/offers-complete"
              element={<OfferComplete />}
            />
            <Route
              path="/seller-dashboard/offers-archived"
              element={<OfferArchived />}
            />

            <Route path="/seller-dashboard/comments" element={<Comments />} />
            <Route path="/seller-dashboard/observer" element={<Observer />} />
            <Route path="/seller-dashboard/news" element={<SellerNews />} />
            <Route path="/seller-dashboard/news/:id" element={<SingleNews />} />
            <Route path="/seller-dashboard/bills" element={<Bills />} />
            <Route
              path="/seller-dashboard/activity"
              element={<SellerActivity />}
            />
            <Route
              path="/seller-dashboard/company-profile"
              element={<CompanyProfile />}
            />
            <Route
              path="/seller-dashboard/verify-documents"
              element={<VerifyDocuments />}
            />
            <Route
              path="/seller-dashboard/requests"
              element={<SellerRequests />}
            />
            <Route
              path="/seller-dashboard/reviews"
              element={<DashboardReviews />}
            />
            <Route
              path="/seller-dashboard/personal-info"
              element={<PersonalInfo />}
            />
            <Route
              path="/seller-dashboard/membership"
              element={<SellerCredits />}
            />
            <Route
              path="/seller-dashboard/payment-success"
              element={<PaymentSuccess />}
            />
            <Route
              path="/seller-dashboard/payment-fail"
              element={<PaymentFail />}
            />
            <Route
              path="/seller-dashboard/seller-credit"
              element={<Credit />}
            />
            <Route
              path="/seller-dashboard/seller-credit/payment-success"
              element={<CreditPaymentSuccess />}
            />
            <Route
              path="/seller-dashboard/seller-credit/payment-fail"
              element={<CreditPaymentFail />}
            />
            <Route
              path="/seller-dashboard/seller-credit"
              element={<Credit />}
            />
          </Route>
          <Route
            path="/seller-dashboard/membership/buy"
            element={<Membership />}
          />
        </Route>
        {/* seller routes */}

        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/enter-company" element={<EnterCompany />} />
        <Route path="/login/with-password" element={<LoginForm />} />
        <Route path="/cost-calculator" element={<CostCalculator />} />
        <Route path="/search-job" element={<SearchOrder />} />
        <Route path="/search-job/:id" element={<SingleOffer />} />
        <Route path="/verify-email/:token" element={<EmailValidation />} />
        <Route
          path="/seller-review-profile/:id"
          element={<SellerPeviewProfile />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contractor" element={<Contractor />} />
        <Route path="/data-protection" element={<DataProtection />} />
        <Route path="/free-for-clients" element={<FreeForClient />} />
        <Route path="/how-it-works-client" element={<HowItWorksClient />} />
        <Route
          path="/how-it-works-contractor"
          element={<HowItWorksContractor />}
        />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/location" element={<Location />} />

        <Route path="/seller-dashboard" element={<SellerDashboard />} />

        <Route element={<RequestRoute />}>
          <Route path="/enter-request" element={<CreateJob />} />
        </Route>

        <Route element={<OfferRoute />}>
          <Route path="/search-job/send-bid/:id" element={<BiddingForm />} />
          <Route
            path="/search-job/prepard-bid/:id"
            element={<PrepeardForm />}
          />
        </Route>

        {/* public routes */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
