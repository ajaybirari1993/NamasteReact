import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header, Body, ContactUs, ErrorState } from "./components";
import { RestaurantMenu } from "./components/RestaurantMenu";

import UserProvider from "./utils.js/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils.js/appStore";

const About = lazy(() => import("./components/About/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserProvider>
        <div className="flex flex-col gap-4">
          <Header />
          <Outlet />
          <p>Footer</p>
        </div>
      </UserProvider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorState />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
// root.render(HeadingComponent()); ==> using the function call pattern
root.render(<RouterProvider router={appRouter} />); // ==> using the HTML tag pattern
