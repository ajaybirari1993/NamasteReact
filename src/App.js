import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header, Body, ContactUs, ErrorState } from "./components";

const About = lazy(() => import("./components/About/About"));

const AppLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Outlet />
      <p>Footer</p>
    </div>
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
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
// root.render(HeadingComponent()); ==> using the function call pattern
root.render(<RouterProvider router={appRouter} />); // ==> using the HTML tag pattern
