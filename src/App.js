import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

const heading = <h1>Hi Aryan</h1>;

//rendering React element inside another React
const elem = (
  <div>
    {heading}
    <h1>Hi Aryan</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
