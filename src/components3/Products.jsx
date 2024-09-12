import styles from "./Products.module.css";
import Stars from "./Stars";

const Products = ({ name, price, image, adding }) => {
  const handleadd = (name) => {
    adding(name, price, image);
  };
  return (
    <>
      <div className={styles.box}>
        <div className={styles.shoebox}>
          <a href="/ProductDetail">
            <img src={image} alt="" height="200px" />
          </a>
          <h3>{name}</h3>
        </div>
        <div className={styles.detail}>
          <h6>{price}</h6>
          <Stars></Stars>
          <button className={styles.add} onClick={() => handleadd(name)}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Products;
