import styles from "./Right.module.css";
import { FaRegHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

function Right2() {
  return (
    <>
      <div>
        <h4>Infinite Total , Total Support</h4>
        <p>
          Threadborn upper delivers lightweight directional <br />
          strength to support the game<sup>s</sup> most brilliant player. <br />{" "}
          Stephen Curry.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className={styles.box} style={{ background: "lightblue" }}></div>
          <div className={styles.box} style={{ background: "yellow" }}></div>
          <div className={styles.box} style={{ background: "red" }}></div>
          <div className={styles.box} style={{ background: "brown" }}></div>
        </div>
        <div>
          {" "}
          <FaRegHeart className={styles.icon} />
          <FaCartArrowDown className={styles.icon} />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h5>Select Size</h5>
        <div style={{ display: "flex" }}>
          <div className={styles.size}>7</div>
          <div className={styles.size}>8</div>
          <div className={styles.size}>9</div>
          <div className={styles.size}>10</div>
          <div className={styles.size}>11</div>
        </div>
      </div>
    </>
  );
}
export default Right2;
