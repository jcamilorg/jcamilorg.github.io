import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultTempleate = (props) => {
  return (
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default DefaultTempleate;
