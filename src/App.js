import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";

const heading = <h1>Hi Aryan</h1>;

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));
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
      <Outlet />
    </div>
  );
};

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: (
          <Suspense
            fallback={
              (<div>
                <h2>Loading......</h2>
              </div>)
            }
          >
            <About />
          </Suspense>
        ),
      },
      {
        path: "grocery",
        element: (
          <Suspense
            fallback={
              (<div>
                <h2>Loading......</h2>
              </div>)
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: <ResMenu />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={routerList} />);
