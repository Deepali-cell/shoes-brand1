import Products from "./Products";
import blue from "../assets/blueshoe.png";
import brown from "../assets/brownshoe.png";
import pink from "../assets/pinkshoe.png";
import red from "../assets/redshoe.png";
import grey from "../assets/greyshoe.png";
import green from "../assets/greenshoe.png";
import { useState } from "react";
import Cart from "../components4/Cart";

const Items = () => {
  const myarray = [
    { name: "Brown shoe", price: "129$", image: brown },
    { name: "Green shoe", price: "330$", image: green },
    { name: "Red shoe", price: "120$", image: red },
    { name: "Pink shoe", price: "400$", image: pink },
    { name: "Blue shoe", price: "200$", image: blue },
    { name: "Grey shoe", price: "230$", image: grey },
  ];
  const [additem, setitem] = useState([]);

  const adding = (name) => {
    myarray.map((items, index) => {
      items.name === name
        ? setitem([
            ...additem,
            { Name: items.name, Price: items.price, Image: items.image },
          ])
        : "there is no item";
    });
  };

  const deletitem = (name) => {
    myarray.map((items, index) => {
      items.name === name
        ? setitem(additem.filter((item) => item.name !== name))
        : "there is no item";
    });
  };
  return (
    <>
      {myarray.map((items, index) => (
        <Products
          key={items.index}
          name={items.name}
          price={items.price}
          image={items.image}
          adding={adding}
        ></Products>
      ))}
      {additem.length === 0 ? (
        <div>
          <h1
            style={{ marginTop: "70px", position: "absolute", left: "550px" }}
          >
            {" "}
            Empty Cart{" "}
          </h1>
        </div>
      ) : (
        <Cart additem={additem} deletitem={deletitem}></Cart>
      )}
    </>
  );
};
export default Items;
