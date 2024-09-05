import { useContext } from "react";
import { ProductContext } from "../store/BrandStore";
import Cart from "./Cart";

function MyCart() {
  const contextobj = useContext(ProductContext);
  const additem = contextobj.Product;
  const deleting = contextobj.deleting;
  return (
    <>
      {additem.map((item, index) => (
        <Cart
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
          deleting={deleting}
        ></Cart>
      ))}
    </>
  );
}
export default MyCart;
