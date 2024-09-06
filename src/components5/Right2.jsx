import styles from "./Right2.module.css";
import bluelogo from "../assets/BlueLogo.png";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa";

function Right2() {
  return (
    <>
      <div className={styles.right2}>
        <div>
          <img src={bluelogo} alt="" height={"150px"} />
        </div>
        <form action="">
          <FaUserCircle className={styles.icon} />
          <input type="text" placeholder="Email" />
          <br />
          <RiLockPasswordFill className={styles.icon} />
          <input type="password" placeholder=" Create Password" />
          <input type="password" placeholder=" Confrim Password" />
          <FaRegEyeSlash className={styles.icon} />
          <div className={styles.signbtn}>
            <button>
              <a href="/Home">Sign Up</a>
            </button>
            <p>
              Already Have an account? <a href="/">Login</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
export default Right2;
