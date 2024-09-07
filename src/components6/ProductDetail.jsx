import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "./ProductDetail.module.css";
import Productright from "./Productright";
import Productleft from "./Product.left";

const ProductDetail = () => {
  return (
    <>
      <div className={styles.page}>
        <div>
          <a href="/Menu">
            <IoMdArrowRoundBack style={{ fontSize: "4rem", padding: "0px" }} />
          </a>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <Productleft></Productleft>
          </div>
          <div className={styles.right}>
            <Productright></Productright>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
