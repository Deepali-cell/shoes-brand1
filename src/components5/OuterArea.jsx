import styles from "./OuterArea.module.css";
import Logo from "../assets/LogoWhite.png";
import Signup from "./Signup";

function OuterArea() {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div>
          <Signup></Signup>
        </div>
      </div>
    </>
  );
}
export default OuterArea;
