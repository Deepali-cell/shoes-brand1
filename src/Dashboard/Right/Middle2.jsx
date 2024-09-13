import styles from "./Middle2.module.css";

function Middle2() {
  return (
    <>
      {" "}
      <div className={styles.bigbox}>
        <div className={styles.content}>
          <div>
            <ul className={styles.list}>
              <li>
                <div className={styles.data}>
                  <h6> INR Deposite</h6>
                  <p>2022-06-09 7:06 PM</p>
                </div>
                <div>
                  {" "}
                  <h6>₹81,123.12</h6>
                </div>
              </li>
              <li>
                <div className={styles.data}>
                  <h6>BTC Sell</h6>
                  <p>2022-05-27 12:32 PM</p>
                </div>
                <div>
                  {" "}
                  <h6>- 12.46364733 BTC</h6>
                  <p style={{ textAlign: "right" }}>+ $81,123.52</p>
                </div>
              </li>
              <li>
                <div className={styles.data}>
                  <h6>INR Deposite</h6>
                  <p>2022-06-09 7:06 PM</p>
                </div>
                <div>
                  {" "}
                  <h6>₹81,123.12</h6>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button className={styles.btn}>View All</button>
      </div>
    </>
  );
}
export default Middle2;
