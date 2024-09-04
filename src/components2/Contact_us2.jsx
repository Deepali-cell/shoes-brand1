import styles from "./Contact_us2.module.css";
import { MdOutlineChat } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact_us2 = () => {
  return (
    <>
      <div>
        <div>
          <button className={styles.btn1}>
            {" "}
            <MdOutlineChat /> VIA SUPPORT CHAT
          </button>
          <button className={styles.btn2}>
            <IoCall /> VIA CALL
          </button>
        </div>
        <div>
          <button className={styles.btn3}>
            {" "}
            <MdEmail /> VIA EMAIL FROM
          </button>
        </div>
      </div>
    </>
  );
};
export default Contact_us2;
