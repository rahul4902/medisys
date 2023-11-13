import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { Route, Routes } from "react-router-dom";

const FrontLayout = (props) => {
  const { children } = props;
  return (
    <div className="App">
      <Header isStickyHeader={true} />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      <div>{children}</div>
      <WhatsAppIcon />
    </div>
  );
};
export default FrontLayout;
