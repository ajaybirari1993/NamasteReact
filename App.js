import React from "react";
import { createRoot } from "react-dom/client";
/*
	<div id="parent">
		<div id="child">
			<h1>I am H1 tag</h1>
			<h2>I am H2 tag</h2>
		</div>
	</div>
*/

// const heading = React.createElement("h1", { id: "heading" }, "Hello Ajay!");

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 Tag"),
    React.createElement("h2", {}, "I am H2 Tag"),
  ]),
);

console.log(parent);
const root = createRoot(document.getElementById("root"));

root.render(parent);
