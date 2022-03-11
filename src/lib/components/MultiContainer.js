import React from "react";
import "../styles/multiContainer.css";

const MultiContainer = ({ containerStyle, children }) => {
  return (
    <div className="mainContainer" style={containerStyle}>
      {children}
    </div>
  );
};

export default MultiContainer;
