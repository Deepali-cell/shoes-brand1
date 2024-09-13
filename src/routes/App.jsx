import { Outlet, Navigate } from "react-router-dom";
import ProductReduderContext from "../store/BrandStore";

function App() {
  const check = localStorage.getItem("loggedin");
  return (
    <>
      <ProductReduderContext>
        {check ? <Outlet></Outlet> : <Navigate to="/Login"></Navigate>}
      </ProductReduderContext>
    </>
  );
}
export default App;
