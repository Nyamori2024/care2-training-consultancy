// src/contexts/FormProvider.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import { FormContext } from "./FormContext";

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <FormContext.Provider value={{ formData, handleChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormProvider;
