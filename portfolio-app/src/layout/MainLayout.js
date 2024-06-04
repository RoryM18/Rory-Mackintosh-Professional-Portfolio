import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="all">
      <Navbar></Navbar>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
