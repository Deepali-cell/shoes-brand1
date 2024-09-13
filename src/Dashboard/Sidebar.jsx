import styles from "./Sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <nav>
          <ul className={styles.list}>
            <li>
              <Link to="/DashBoard">
                <MdDashboard className={styles.icon}></MdDashboard> DashBoard
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Transation">
                <GrTransaction className={styles.icon}></GrTransaction>{" "}
                Transaction
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Sidebar;
