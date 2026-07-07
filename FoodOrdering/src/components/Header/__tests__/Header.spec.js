import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../Header";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../../utils.js/appStore";

describe("Header component", () => {
  it("Should render the component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />,
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  it("Should change to Logout button on Login click component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />,
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
