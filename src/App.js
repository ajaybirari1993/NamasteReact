import React from "react";
import { createRoot } from "react-dom/client";

import { Header, Body } from "./components";

const AppLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Body />
      <p>Footer</p>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
// root.render(HeadingComponent()); ==> using the function call pattern
root.render(<AppLayout />); // ==> using the HTML tag pattern
