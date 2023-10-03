import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar/Navbar";

const Slider = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Slider;
