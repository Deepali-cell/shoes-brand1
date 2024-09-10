import blue from "../assets/blueshoe.png";
import brown from "../assets/brownshoe.png";
import pink from "../assets/pinkshoe.png";
import red from "../assets/redshoe.png";
import grey from "../assets/greyshoe.png";
import green from "../assets/greenshoe.png";

import { children, createContext, useReducer } from "react";

export const myarray = [
  { name: "Brown shoe", price: "129$", image: brown, type: "Gens" },
  { name: "Green shoe", price: "330$", image: green, type: "Gens" },
  { name: "Red shoe", price: "120$", image: red, type: "Women" },
  { name: "Pink shoe", price: "400$", image: pink, type: "Women" },
  { name: "Blue shoe", price: "200$", image: blue, type: "Kids" },
  { name: "Grey shoe", price: "230$", image: grey, type: "Kids" },
];
export const sidearray = [
  { name: "All", type: "All" },
  { name: "Men", type: "Gens" },
  { name: "Women", type: "Women" },
  { name: "Kids", type: "Kids" },
];

export const ProductContext = createContext([]);

const ProductReducer = (state, action) => {
  let newProduct = state;
  if (action.type === "ADD_PRODUCT") {
    newProduct = [
      ...state,
      {
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
      },
    ];
  } else if (action.type === "DELETE_PRODUCT") {
    newProduct = state.filter(
      (product) => product.name !== action.payload.name
    );
  }
  return newProduct;
};
const ProductReduderContext = ({ children }) => {
  const [Product, dispatchProduct] = useReducer(ProductReducer, []);

  const adding = (name, price, image) => {
    dispatchProduct({
      type: "ADD_PRODUCT",
      payload: {
        name,
        price,
        image,
      },
    });
  };
  const deleting = (name) => {
    dispatchProduct({
      type: "DELETE_PRODUCT",
      payload: {
        name,
      },
    });
  };
  return (
    <ProductContext.Provider
      value={{ Product: Product, adding: adding, deleting: deleting }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductReduderContext;
