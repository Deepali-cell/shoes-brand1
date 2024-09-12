import styles from "./Button.module.css";
import Flipcart_logo from "../assets/Flipcart_logo.png";
import Amazon_logo from "../assets/amazon_logo.png";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
      <div style={styles.bottom}>
        <div>
          <button className={styles.shop}>Shop Now</button>
          <button className={styles.category}>
            <Link to="/Menu">Category</Link>
          </button>
        </div>
        <div className={styles.bottom2}>
          <h6>Also Available On</h6>
          <div className={styles.available}>
            <img src={Flipcart_logo} alt="" />
            <img src={Amazon_logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Button;
