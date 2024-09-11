import { useRef } from "react";
import styles from "./Contact_form.module.css";
import emailjs from "@emailjs/browser";

const Contact_form = () => {
  const name = useRef("");
  const email = useRef("");
  const text = useRef("");

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_98v1pmg",
        "template_314gbgb",
        form.current,
        "a2ohp-EEVChNsdQqR"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    name.current.value = "";
    email.current.value = "";
    text.current.value = "";
  };
  return (
    <>
      <form
        style={{ position: "absolute", left: "0px" }}
        ref={form}
        onSubmit={sendEmail}
      >
        <div className={styles.form}>
          <input type="text" ref={name} placeholder="Name" name="your_name" />
          <input
            type="email"
            ref={email}
            placeholder="Email"
            name="your_email"
          />
          <input
            type="text"
            ref={text}
            placeholder="Enter your Text here..."
            style={{ width: "500px" }}
            name="message"
          />

          <div className={styles.submit}>
            <button type="submit" onSubmit={sendEmail}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Contact_form;
