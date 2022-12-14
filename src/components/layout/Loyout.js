import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Loyout = ({ children, className, type }) => {
  return (
    <div
      className={[
        "layout_wrapper ",
        type === "header_top" ? "header_top" : "",
        type === "sidebar_right" ? "sidebar_right" : "",
        className,
      ].join(" ")}
    >
      {type === "header_top" ? <Header /> : <Sidebar />}
      <div className="main">
        {type === "header_top" ? <Sidebar /> : <Header />}
        <div className="content">{children}</div>
        {type === "header_top" ? null : <Footer />}
      </div>
      {type === "header_top" ? <Footer /> : null}
    </div>
  );
};

export default Loyout;
