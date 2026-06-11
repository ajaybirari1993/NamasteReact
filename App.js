import React from "react";
import { createRoot } from "react-dom/client";

// JSX (transpiled before it reaches to JS) PARECL - Babel
// JSX => traspiled to React.createElement => ReactElement JS object => HTMLElement(render)

const Title = () => <h1>Hello Ajay</h1>; // React component
const desc = <p>This the test desc</p>; // React element

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1 className="heading">This the React js practice</h1>
      {desc}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
// root.render(HeadingComponent()); ==> using the function call pattern
root.render(<HeadingComponent />); // ==> using the HTML tag pattern
