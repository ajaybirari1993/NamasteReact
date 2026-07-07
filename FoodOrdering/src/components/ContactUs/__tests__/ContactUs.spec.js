import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ContactUs from "../ContactUs";

describe("ContactUs component", () => {
  test("Should render the component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should render the submit button", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should render the input name", () => {
    render(<ContactUs />);

    const nameInput = screen.getByPlaceholderText("name");
    expect(nameInput).toBeInTheDocument();
  });

  test("should render 2 input ", () => {
    render(<ContactUs />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
