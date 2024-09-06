import { Outlet } from "react-router-dom";
import ProductReduderContext from "../store/BrandStore";

function App() {
  return (
    <>
      <ProductReduderContext>
        <Outlet />
      </ProductReduderContext>
    </>
  );
}
export default App;
