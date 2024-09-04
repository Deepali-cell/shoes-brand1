import styles from "./Products.module.css";
import { MdAddShoppingCart } from "react-icons/md";

const Products = ({ name, price, image, adding }) => {
  return (
    <>
      <div className={styles.box}>
        <img src={image} alt="" height="200px" />
        <div className={styles.detail}>
          <h3>{name}</h3>
          <h6>{price}</h6>
          <button className={styles.add}>
            <MdAddShoppingCart onClick={() => adding(name)} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Products;
