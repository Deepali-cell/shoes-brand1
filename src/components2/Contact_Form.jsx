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
      <form style={{ position: "absolute", left: "0px" }}>
        <div className={styles.form}>
          <input type="text" ref={name} placeholder="Name" />
          <input type="email" ref={email} placeholder="Email" />
          <textarea
            rows={4}
            ref={text}
            placeholder="Enter your Text here..."
            style={{ width: "500px" }}
          ></textarea>
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
