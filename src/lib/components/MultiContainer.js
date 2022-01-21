import React from "react";
import localClasses from "../styles/multiContainer.module.css";

const MultiContainer = ({ containerStyle, children }) => {
  return (
    <div className={localClasses.mainContainer} style={containerStyle}>
      {children}
    </div>
  );
};

export default MultiContainer;
