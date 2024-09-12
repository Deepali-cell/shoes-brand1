import { FaRegStar } from "react-icons/fa";
import styles from "./Stars.module.css";
import { useState } from "react";

function Stars() {
  const stars = Array(5).fill(0);
  const [rating, setRating] = useState(0);
  return (
    <>
      <div>
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
export default Stars;
