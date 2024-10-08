import Left from "./Left";
import styles from "./Signup.module.css";
import Right from "./Right";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Left></Left>
        </div>
        <div className={styles.right}>
          <Right></Right>
        </div>
      </div>
    </>
  );
};
export default Login;
