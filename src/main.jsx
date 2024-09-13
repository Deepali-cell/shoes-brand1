import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components3/Menu.jsx";
import Contact_us1 from "./components2/Contact_us1.jsx";
import Content from "./components/Content.jsx";
import MyCart from "./components4/MyCart.jsx";
import ProductDetail from "./components6/ProductDetail.jsx";
import Customerreview from "./components7/Customerreview.jsx";
import OuterArea from "./components5/OuterArea.jsx";
import OuterArea2 from "./components5/OuterArea2.jsx";

const router = createBrowserRouter([
  { path: "/Signup", element: <OuterArea /> },
  { path: "/Login", element: <OuterArea2 /> },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Menu", element: <Menu /> },
      { path: "/Contact_us", element: <Contact_us1 /> },
      { path: "/Cart", element: <MyCart /> },
      { path: "/", element: <Content /> },
      { path: "/ProductDetail", element: <ProductDetail /> },
      { path: "/Review", element: <Customerreview /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
