import React, { useState } from "react";
import Loyout from "./components/layout/Loyout";
import {
  Layout1Icon,
  Layout2Icon,
  Layout3Icon,
} from "./components/icons/Icons";
const App = () => {
  let [type, setType] = useState("");
  const clickHandler = (type) => {
    setType(type);
  };
  return (
    <Loyout type={type}>
      <div>
        <h3>Change Layout</h3>
        <div className="row">
          <Layout1Icon
            onClick={() => clickHandler("")}
            className={["mr-10 ", type === "" ? "active" : ""].join(" ")}
          />
          <Layout2Icon
            onClick={() => clickHandler("sidebar_right")}
            className={[
              "mr-10 ",
              type === "sidebar_right" ? "active" : "",
            ].join(" ")}
          />
          <Layout3Icon
            onClick={() => clickHandler("header_top")}
            className={["mr-10 ", type === "header_top" ? "active" : ""].join(
              " "
            )}
          />
        </div>
      </div>
    </Loyout>
  );
};

export default App;
