import styles from "./Right2.module.css";
import bluelogo from "../assets/BlueLogo.png";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Right2() {
  const navigate = useNavigate();
  const [input, setinput] = useState({ name: "", email: "", password: "" });
  const handlesignup = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/Login");
  };
  return (
    <>
      <div className={styles.right2}>
        <div>
          <img src={bluelogo} alt="" height={"150px"} />
        </div>
        <form onSubmit={handlesignup}>
          <FaUserCircle className={styles.icon} />
          <input
            type="text"
            placeholder="UserName"
            name="name"
            value={input.name}
            onChange={(e) =>
              setinput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <br />
          <MdMarkEmailRead className={styles.icon} />
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
            placeholder=" Create Password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setinput({ ...input, [e.target.name]: e.target.value })
            }
          />
          <FaRegEyeSlash className={styles.icon} />
          <div className={styles.signbtn}>
            <button type="submit">Sign Up</button>
            <p className={styles.login}>
              Already Have an account? <Link to="/Login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
export default Right2;
