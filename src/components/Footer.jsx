import React from "react";

const Footer = () => {
  const footerStyle = {
    // position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    padding: "10px 0",
    backgroundColor: "#050816",
    color: "#fff",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()}Copyright 2024 Ritu Raj Prasad Inc. All
      rights reserved
    </footer>
  );
};

export default Footer;
