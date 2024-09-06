import styles from "./Left.module.css";
import advertising from "../assets/advertising.png";

const Left = ({ handlelogin, handle }) => {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.png_div}>
          <div className={styles.png_container}>
            <img src={advertising} alt="" className={styles.image} />
            <img src={advertising} alt="" className={styles.image_shadow} />
          </div>
        </div>
        <div className={styles.btns}>
          <button onClick={handlelogin}>Login</button>
          <button onClick={handle}>Sign Up</button>
        </div>
      </div>
    </>
  );
};
export default Left;
