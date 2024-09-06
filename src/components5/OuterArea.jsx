import styles from "./OuterArea.module.css";
import Logo from "../assets/LogoWhite.png";
import Login from "./Login";

function OuterArea() {
  return (
    <>
      <div className={styles.outer}>

        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        
        <div>
          <Login></Login>
        </div>
      </div>
    </>
  );
}
export default OuterArea;
