import { useCallback } from "react";

const useCheckbox = (setSelectedOptions, setHasOptions) => {
  const handleCheckboxChange = useCallback(
    (key, value) => {
      const keyname = key.split(" ").join("_");
      setSelectedOptions((prevSelected) => {
        const currentValues = prevSelected[keyname] || [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((val) => val !== value)
          : [...currentValues, value];
        const hasCheckedOptions = newValues.length > 0;
        if (handleCheckboxChange) {
          setHasOptions(hasCheckedOptions);
        }
        return {
          ...prevSelected,
          [keyname]: newValues,
        };
      });
    },
    [setSelectedOptions, setHasOptions]
  );

  return {
    handleCheckboxChange,
  };
};

export default useCheckbox;
