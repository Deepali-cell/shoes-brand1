import Header from "../components/Header";
import styles from "./DashBoard.module.css";
import RightContent from "./RightContent";
import Sidebar from "./Sidebar";

function DashBoard() {
  return (
    <>
      <Header></Header>
      <div className={styles.dashboard}>
        <div className={styles.left}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.right}>
          <RightContent></RightContent>
        </div>
      </div>
    </>
  );
}
export default DashBoard;
