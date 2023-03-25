import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Root;
