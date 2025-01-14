// Importing necessary libraries and modules
import PropTypes from "prop-types";
import { useState } from "react";
import { FormContext } from "./FormContext";

// FormProvider component wraps children components with form context
export const FormProvider = ({ children }) => {
  // useState hook to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle input changes and update state dynamically
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring input name and value
    setFormData((prevData) => ({
      ...prevData, // Spread existing form data
      [name]: value, // Update the specific field
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault(); // Prevent default form submission behavior
    }
    console.log("Form submitted:", formData); // Log form data to console
    setFormData({ name: "", email: "", message: "" }); // Reset form fields
  };

  return (
    // Providing form data and handlers to child components
    <FormContext.Provider value={{ formData, handleChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

// Defining prop types for the FormProvider component
FormProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensuring children prop is provided
};

export default FormProvider;
