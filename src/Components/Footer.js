import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-2">{new Date().getFullYear()}</div>
  );
};

export default Footer;
