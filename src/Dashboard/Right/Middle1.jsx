import styles from "./Middle.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";
function Middle1() {
  const timestamps = ["7:15 PM", "12:55 AM", "6:35 AM", "12.15 PM", "5:55 PM"];
  return (
    <>
      {" "}
      <div className={styles.bigbox}>
        <div className={styles.bigb1}>
          <div className={styles.smallbox}>
            <h6>Current Price</h6>
            <h5>
              ₹ 26,670.25{" "}
              <span
                style={{ color: "green", fontSize: "1rem", fontWeight: "500" }}
              >
                {" "}
                <GoArrowUpRight /> 0.04%
              </span>
            </h5>
          </div>
          <div className={styles.smallbox}>
            <button>
              {" "}
              <IoAddCircleOutline /> Buy
            </button>
            <button>
              <GrSubtractCircle /> Sell
            </button>
          </div>
        </div>
        <div>
          <img src="public\graph.svg" width="100%" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {timestamps.map((time, index) => (
              <h6 key={index}>{time}</h6>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Middle1;
