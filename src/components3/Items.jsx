import Products from "./Products";
import { ProductContext } from "../store/BrandStore";
import { useContext } from "react";
import { myarray } from "../store/BrandStore";

const Items = () => {
  const contextobj = useContext(ProductContext);
  const adding = contextobj.adding;

  return (
    <>
      {myarray.map((items, index) => (
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
