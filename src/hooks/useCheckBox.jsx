import { useCallback } from "react";

const useCheckbox = (setSelectedOptions, setHasOptions) => {
  const handleCheckboxChange = useCallback(
    (key, value) => {
      const keyname = key.split(" ").join("_");

      setSelectedOptions((prevSelected) => {
        // Get the current values for the checkbox group, or initialize as an empty array
        const currentValues = prevSelected[keyname] || [];

        // Toggle the checkbox selection
        const newValues = currentValues.includes(value)
          ? currentValues.filter((val) => val !== value) // Remove if already selected
          : [...currentValues, value]; // Add if not selected

        // Determine if there are any checked checkboxes
        const hasCheckedOptions = newValues.length > 0;

        // Update `hasOptions` state based on the presence of checked checkboxes
        if (handleCheckboxChange) {
          setHasOptions(hasCheckedOptions);
        }

        // Return updated state
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
