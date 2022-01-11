import React, { useState } from "react";
import "./CustomDropdown.css";

const CustomDropdown = ({ title, descr }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={() => setOpen(!isOpen)}>
        <span>{title}</span>
        <img
          className={`dropdown-arrow ${isOpen && "dropdown-arrow-active"}`}
          src="/icons/arrow-down.svg"
          alt="arrow"
        />
      </div>
      <div className={`dropdown-body ${isOpen && "dropdown-body-active"}`}>
        {descr}
      </div>
    </div>
  );
};

export { CustomDropdown };
