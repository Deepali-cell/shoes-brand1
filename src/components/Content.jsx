import styles from "./Content.module.css";
import Shoes from "../assets/shoes.png";
import Button from "./Button";

const Content = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.right}>
          <h1>
            YOUR FEET <br /> DESERVE <br />
            THE BEST
          </h1>
          <p>
            The Nike Sweet Classic High is comfortable <br />
            while still remaining in style. With Great Quality <br />
            and a wide variety of colors options.
          </p>
          <Button></Button>
        </div>
        <div className={styles.png_div}>
          <div className={styles.png_container}>
            <img src={Shoes} alt="" className={styles.image} />
            <img src={Shoes} alt="" className={styles.image_shadow} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
