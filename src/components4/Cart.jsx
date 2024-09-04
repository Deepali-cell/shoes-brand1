import styles from "./Cart.module.css";
import { MdDelete } from "react-icons/md";

const Cart = ({ additem, deletitem }) => {
  return (
    <>
      <div>
        <h1 style={{ marginTop: "70px", position: "absolute", left: "550px" }}>
          My Cart
        </h1>
      </div>
      {additem.map((Items, index) => (
        <div className={styles.box}>
          <img src={Items.Image} alt="" height="200px" />
          <div className={styles.detail}>
            <h6>{Items.Name}</h6>
            <h6>{Items.Price}</h6>
            <MdDelete
              className={styles.delete}
              onClick={() => deletitem(Items.Name)}
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default Cart;
