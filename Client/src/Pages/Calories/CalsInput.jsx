import React from "react";
import CalsForm from "./CalsForm.jsx";

const CalsInput = (props) => {
  return (
    <div className="Cals-input-wrap">
      <CalsForm {...props} />
    </div>
  );
};

export default CalsInput;
