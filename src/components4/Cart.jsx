import styles from "./Cart.module.css";

function Cart({ name, price, image, deleting }) {
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
          <button className={styles.delete} onClick={() => deleting(name)}>
            delete
          </button>
        </div>
      </div>
    </>
  );
}
export default Cart;
