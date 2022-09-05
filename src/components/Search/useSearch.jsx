import React from "react";
import ReactInputMask from "react-input-mask";

const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

const MaskedInput = ({ value, onChange }) => {
  // This function ensures that only numbers will be passed;
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: onlyNumbers(event.target.value),
      },
    });
  }

  return (
    <ReactInputMask
      mask="9999999-99.9999.9.99.9999"
      placeholder="NNNNNNN-NN.NNNN.N.NN.NNNN"
      value={value}
      onChange={handleChange}
      maskChar=""
    />
  );
};

export default MaskedInput;
