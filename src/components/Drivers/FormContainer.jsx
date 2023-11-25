import React from "react";

const FormContainer = ({ children }) => {
  return (
    <section className="d-flex flex-column align-items-center mt-3">
      {children}
    </section>
  );
};

export default FormContainer;
