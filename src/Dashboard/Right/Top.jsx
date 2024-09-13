import styles from "./Top.module.css";
import { PiHandDeposit, PiHandWithdraw } from "react-icons/pi";

function Top() {
  return (
    <>
      <div className={styles.bigbox}>
        <div className={styles.smallbox}>
          <h6>Total Portfolio Value</h6>
          <h5>₹ 112,312.45</h5>
        </div>
        <div className={styles.smallbox}>
          <h6>Wallet Balance </h6>
          <h5>
            22.39401000 <span className={styles.tag}>BTC</span>
          </h5>
        </div>
        <div className={styles.smallbox} style={{ display: "flex" }}>
          <h5>₹1,300.00</h5>
          <span className={styles.tag}>INR</span>
        </div>
        <div className={styles.smallbox}>
          <button>
            <PiHandDeposit
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
              }}
            />
            Deposite
          </button>
          <button>
            {" "}
            <PiHandWithdraw
              style={{
                fontSize: "1.5rem",
                fontWeight: "800",
              }}
            />{" "}
            Withdraw
          </button>
        </div>
      </div>
    </>
  );
}
export default Top;
