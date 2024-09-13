import Left from "./Left";
import styles from "./Signup.module.css";
import Right2 from "./Right2";

const Signup = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Left></Left>
        </div>
        <div className={styles.right}>
          <Right2></Right2>
        </div>
      </div>
    </>
  );
};
export default Signup;
