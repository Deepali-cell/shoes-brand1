import Header from "../components/Header";
import Sidebar from "../Dashboard/Sidebar";
import styles from "./Transation.module.css";

function Transation() {
  return (
    <>
      <Header></Header>
      <div className={styles.dashboard}>
        <div className={styles.left}>
          <Sidebar></Sidebar>
        </div>
        <div className={styles.right}></div>
      </div>
    </>
  );
}
export default Transation;
