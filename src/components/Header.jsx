import styles from "./Header.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className={styles.navbar}>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Cart">My Cart</Link>
            </li>
            <li>
              <Link to="/Contact_us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.loginbtn}>
          <button>User account</button>
        </div>
      </div>
    </>
  );
};
export default Header;
