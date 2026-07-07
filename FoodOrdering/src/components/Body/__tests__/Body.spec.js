import { render, act, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import appStore from "../../../utils.js/appStore";

import Body from "../Body";

import REST_MOCK_DATA from "./restMockData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(REST_MOCK_DATA);
    },
  });
});

describe("Search functionality", () => {
  it("Should search the restaurants for idli search input", async () => {
    await act(async () => {
      return render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>,
      );
    });

    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "idli" } });
    fireEvent.click(searchButton);

    const restCards = screen.getAllByTestId("restCard");

    expect(restCards.length).toBe(2);
  });

  it("Should top rated restaurants", async () => {
    await act(async () => {
      return render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
          </Provider>
        </BrowserRouter>,
      );
    });

    const cardsBeforeFilter = screen.getAllByTestId("restCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole("button", { name: "Top rated" });
    expect(topRatedBtn).toBeInTheDocument();

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("restCard");
    expect(cardsAfterFilter.length).toBe(5);
  });
});
