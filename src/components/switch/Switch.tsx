import React from "react";
import "./index.css";
import { useState } from "react";

function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
    console.log(isChecked);
  };

  return (
    <div className="switchWrapper">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">Rus</span>
      <span className="off">Eng</span>
    </div>
  );
}

export default Switch;
