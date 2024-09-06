import styles from "./Right.module.css";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import bluelogo from "../assets/BlueLogo.png";
import { MdFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

function Right() {
  return (
    <>
      <div>
        <img src={bluelogo} alt="" height={"150px"} />
      </div>
      <form action="">
        <FaUserCircle className={styles.icon} />
        <input type="text" placeholder="Email" />
        <br />
        <RiLockPasswordFill className={styles.icon} />
        <input type="password" placeholder="Password" />
        <div className={styles.password_detail}>
          <a href="#" className={styles.forget}>
            Forget Password ?
          </a>
          <button>
            <a href="/Home">Login</a>
          </button>
        </div>

        <div className={styles.bottom}>
          <p>or Login With</p>
          <div>
            <div className={styles.bottom_icon}>
              <a href="https://www.google.com">
                {" "}
                <FcGoogle style={{ marginRight: "5px" }} />
                Google
              </a>
              <div>
                <a href="https://www.facebook.com">
                  <MdFacebook style={{ marginRight: "5px" }} /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Right;
