import styles from "./Review.module.css";
import { FaRegStar } from "react-icons/fa";

function Review({ Name, Star }) {
  const stars = Array(Star).fill(0);
  return (
    <>
      <div className={styles.box}>
        <div className={styles.box2}>
          <img src="" alt="" className={styles.image} />
          <div className={styles.user}>
            <h3>{Name}</h3>
            <div>
              {stars.map((item, index) => {
                return (
                  <FaRegStar
                    key={index}
                    style={{
                      color: "green",
                      margin: " 0px 5px",
                      fontSize: "1.3rem",
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.review}>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, quae
            facere? Odio quae repellendus est porro sequi fuga sed voluptates,
            eius, ipsam voluptas reicie-
          </p>
        </div>
      </div>
    </>
  );
}
export default Review;
