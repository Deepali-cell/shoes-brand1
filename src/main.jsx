import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./components3/Menu.jsx";
import Contact_us1 from "./components2/Contact_us1.jsx";
import Content from "./components/Content.jsx";
import MyCart from "./components4/MyCart.jsx";
import LoginForm from "./components5/LoginForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/Menu", element: <Menu /> },
      { path: "/Contact_us", element: <Contact_us1 /> },
      { path: "/Cart", element: <MyCart /> },
      { path: "/Home", element: <Content /> },
      { path: "/", element: <LoginForm /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
