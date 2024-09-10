import Products from "./Products";
import { myarray, ProductContext } from "../store/BrandStore";
import { useContext } from "react";

const Items = ({ show }) => {
  const contextobj = useContext(ProductContext);
  const adding = contextobj.adding;

  return (
    <>
      {show?.map((items, index) => (
        <Products
          key={index}
          name={items.name}
          price={items.price}
          image={items.image}
          adding={adding}
        ></Products>
      ))}
    </>
  );
};
export default Items;
