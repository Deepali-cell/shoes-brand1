import styles from "./Header.module.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handlelogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/Login");
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className={styles.navbar}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/Cart">My Cart</Link>
            </li>
            <li>
              <Link to="/Review">Customer Review</Link>
            </li>
            <li>
              <Link to="/Contact_us">Contact</Link>
            </li>
            <li>
              <Link to="/DashBoard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className={styles.userdetail}>
          <h4> {userName.name}</h4>
          <button
            type="button"
            onClick={handlelogout}
            className={styles.logout}
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
