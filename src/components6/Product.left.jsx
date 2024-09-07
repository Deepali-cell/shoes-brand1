import big from "../components6/images/big.png";
import small1 from "../components6/images/small1.png";
import small2 from "../components6/images/small3.png";
import small3 from "../components6/images/small4.png";
import styles from "./Left.module.css";

function Productleft() {
  const change = (small) => {
    let large = document.getElementById("large");
    large.src = small;
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.smallgroup}>
          <ul className={styles.options}>
            <li>
              <img src={small1} alt="" onClick={() => change(small1)} />
            </li>
            <li>
              <img src={small2} alt="" onClick={() => change(small2)} />
            </li>
            <li>
              <img src={small3} alt="" onClick={() => change(small3)} />
            </li>
          </ul>
        </div>
        <div>
          <img src={big} alt="" className={styles.large} id="large" />
        </div>
      </div>
    </>
  );
}
export default Productleft;
