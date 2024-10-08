const usePostalCode = (postalCode, setFormData, setIsPostalCodeValid) => {
  const handlePostalCodeChange = (e) => {
    const postalCodeInput = e.target.value;
    const postalCodeEntry = postalCode?.locations.find(
      (entry) => entry.code.toString() === postalCodeInput
    );

    if (postalCodeEntry) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        jobPostcode: postalCodeEntry.code,
        jobLocation: postalCodeEntry.Gemeinden,
        jobCity: postalCodeEntry.Kanton,
      }));
      setIsPostalCodeValid(true);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        jobPostcode: postalCodeInput,
        jobLocation: "",
      }));
      setIsPostalCodeValid(false);
    }
  };
  return {
    handlePostalCodeChange,
  };
};

export default usePostalCode;
