import { useState } from "react";
import Left from "./Left";
import styles from "./Login.module.css";
import Right from "./Right";
import Right2 from "./Right2";

const Login = () => {
  const [form, setform] = useState(" Right2");

  const handlelogin = () => {
    setform("Right");
  };
  const handle = () => {
    setform("Right2");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Left handlelogin={handlelogin} handlesignup={handle}></Left>
        </div>
        <div className={styles.right}>
          {form === "Right" ? <Right></Right> : <Right2></Right2>}
        </div>
      </div>
    </>
  );
};
export default Login;
