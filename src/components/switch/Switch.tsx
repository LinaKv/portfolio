import React from "react";
import "./index.css";
import { useState } from "react";
import { useMyContext } from "@/context/MyContext";

function Switch() {
  const { language, updateLanguage } = useMyContext();
  const [isChecked, setIsChecked] = useState(!language);

  const handleCheckboxChange = () => {
    // this is for switch to remember it's state
    updateLanguage(!language);
    setIsChecked((prev) => !prev);
    // console.log(isChecked);
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
