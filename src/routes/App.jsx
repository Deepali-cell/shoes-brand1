import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import ProductReduderContext from "../store/BrandStore";

function App() {
  return (
    <>
      <ProductReduderContext>
        <Header />
        <Outlet />
      </ProductReduderContext>
    </>
  );
}
export default App;
