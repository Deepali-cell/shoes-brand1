import { FaRegStar } from "react-icons/fa";
import styles from "./Right.module.css";
import { useState } from "react";

function Right1() {
  const stars = Array(5).fill(0);
  const [rating, setRating] = useState(0);
  return (
    <>
      <div>
        <h2>shoes name</h2>
        <h2>Shoes category</h2>
        {stars.map((item, index) => {
          const givenrating = index + 1;
          return (
            <FaRegStar
              key={index}
              color={
                givenrating < rating || givenrating === rating ? "red" : "000"
              }
              className={styles.star}
              onClick={() => setRating(givenrating)}
            />
          );
        })}
      </div>
    </>
  );
}
export default Right1;
