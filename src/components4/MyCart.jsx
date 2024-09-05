import { useContext } from "react";
import { ProductContext } from "../store/BrandStore";
import Cart from "./Cart";

function MyCart() {
  const contextobj = useContext(ProductContext);
  const additem = contextobj.Product;
  const deleting = contextobj.deleting;
  return (
    <>
      {additem.length === 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60vh",
          }}
        >
          {" "}
          <h1 style={{ textAlign: "center", fontSize: "4rem" }}>Empty Cart </h1>
        </div>
      ) : (
        additem.map((item, index) => (
          <Cart
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            deleting={deleting}
          ></Cart>
        ))
      )}
      {/* {additem.map((item, index) => (
        
        <Cart
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
          deleting={deleting}
        ></Cart>
      ))} */}
    </>
  );
}
export default MyCart;
