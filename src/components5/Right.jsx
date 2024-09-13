import styles from "./Right.module.css";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import bluelogo from "../assets/BlueLogo.png";
import { MdFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Right() {
  const navigate = useNavigate();
  const [input, setinput] = useState({ email: "", password: "" });
  const handlelogin = (e) => {
    e.preventDefault();
    const loginuser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loginuser.email &&
      input.password === loginuser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Invalid User id or password");
    }
  };
  return (
    <>
      <div>
        <img src={bluelogo} alt="" height={"150px"} />
      </div>
      <form onSubmit={handlelogin}>
        <FaUserCircle className={styles.icon} />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={input.email}
          onChange={(e) =>
            setinput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <br />
        <RiLockPasswordFill className={styles.icon} />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={(e) =>
            setinput({ ...input, [e.target.name]: e.target.value })
          }
        />
        <div className={styles.password_detail}>
          <a href="#" className={styles.forget}>
            Forget Password ?
          </a>
          <button type="submit">Login</button>
        </div>
        <div className={styles.signing}>
          <p>
            Don't have an account ? <Link to="/Signup">Sign-up</Link>
          </p>
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
