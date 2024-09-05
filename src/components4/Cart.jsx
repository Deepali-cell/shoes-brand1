import styles from "./Cart.module.css";

function Cart({ name, price, image, deleting }) {
  return (
    <>
      <div className={styles.box}>
        <img src={image} alt="shoes image" height="200px" />
        <div className={styles.detail}>
          <h3>{name}</h3>
          <h6>{price}</h6>
          <br />
          <button className={styles.delete} onClick={() => deleting(name)}>
            delete
          </button>
        </div>
      </div>
    </>
  );
}
export default Cart;
