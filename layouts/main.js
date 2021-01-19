import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function main({ children }) {
  return (
    <div className="container  vh-100 ">
      <Navbar/>
      <div className=" row  my-3 ">
       
        <div className="col-12   ">{children}</div>
      </div>
      <Footer/>
    </div>
  );
}
