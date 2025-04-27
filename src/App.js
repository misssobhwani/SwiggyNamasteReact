import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"; //snow since lazy came into picture we will not import grocery like this


// /* This is creating React element through React*/
// const heading = React.createElement("h1", { id: "heading" }, "Hello from React");
// console.log(heading);
// // This is creating React element through JSX
// const jsxheading = <h1 id="heading">Hello from React</h1>;
// const JSXHeading=()=>(
// <h1 id="heading">Hello from React vijeta</h1>
// )



const AppLayout = () => {
  return (
    <div className="App">
      <Header/>
      <Outlet />
      {/* <CardsXimKart/> */}
      {/* <Body /> */}
      {/* <AboutUs /> */}
      {/* <ContactUs /> */}
      {/* <Error /> */}
    </div>
  );
};

const Grocery = lazy(()=>import("./components/Grocery"))
// console.log(jsxheading);
const appRouter = createBrowserRouter([
  { 
    path: "/", 
    element: <AppLayout />,
    children:[ 
    { path: "/", element: <Body /> },
    { path: "/about", element: <AboutUs /> },
    { path: "/grocery", element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> },
    { path: "/contact", element: <ContactUs /> },
    {path:"/restaurants/:resId", element:<RestaurantMenu/> },
  ],
   errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const jsxheading = <h1 id="heading">Hello from React</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);