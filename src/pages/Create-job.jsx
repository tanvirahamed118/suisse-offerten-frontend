import { useTranslation } from "react-i18next";
import EnterRequest from "../components/Enter-request";
import EnglishForm from "../components/English-form";
import FrenchForm from "../components/French-form";

function CreateJob() {
  const { i18n } = useTranslation();
  return i18n.language === "gr" ? (
    <EnterRequest />
  ) : i18n.language === "en" ? (
    <EnglishForm />
  ) : (
    <FrenchForm />
  );
}

export default CreateJob;
