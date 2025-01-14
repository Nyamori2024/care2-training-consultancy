// src/hooks/useFormContext.js

// Importing necessary hooks and the FormContext
import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

// Custom hook to access form context
export const useFormContext = () => {
  const context = useContext(FormContext); // Retrieve the context value
  if (context === undefined) {
    // Throw error if the hook is used outside of a FormProvider
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context; // Return the context value
};

export default useFormContext;
