import { useRef } from "react";
import styles from "./Contact_form.module.css";

const Contact_form = () => {
  const name = useRef("");
  const email = useRef("");
  const text = useRef("");
  const submiting = (e) => {
    e.preventDefalut();
    const n = name.current.value;
    const em = email.current.value;
    const t = text.current.value;
    name.current.value = "";
    email.current.value = "";
    text.current.value = "";
    console.log("name : " + n + " " + "email :" + em + " " + "text :" + t);
  };
  return (
    <>
      <form>
        <div className={styles.form}>
          <label className={styles.name}>Name</label>
          <input type="text" ref={name} />
          <label className={styles.email}>E-Mail</label>
          <input type="email" ref={email} />
          <label className={styles.text}>Text</label>
          <textarea rows={4} ref={text}></textarea>
          <div className={styles.submit}>
            <button type="submit" onClick={submiting}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Contact_form;
