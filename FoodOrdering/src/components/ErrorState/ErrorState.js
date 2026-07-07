import React from "react";
import { useRouteError } from "react-router";

const ErrorState = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops...</h1>
      <h3>Something went wring</h3>
      <h4>
        {error.status}::{error.data}
      </h4>
    </div>
  );
};

export default ErrorState;
