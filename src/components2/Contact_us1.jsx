import Contact_form from "./Contact_Form";
import styles from "./Contact_us1.module.css";
import Contact_us2 from "./Contact_us2";

const Contact_us1 = () => {
  return (
    <>
      <div className={styles.contact_area}>
        <h1>Contact Us</h1>
        <p>
          LET CONNECT 375*72 HERE TO HELP AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION , COMMENT , OR <br /> JUST WANT TO CHAT .
          YOU CAN REACH TO US THROUGH THE CONTACT FORM OF THIS PAGE AND BY PHONE{" "}
          <br />, EMAIL OR SOCIAL MEDIA.
        </p>
        <Contact_us2></Contact_us2>
        <Contact_form></Contact_form>
      </div>
    </>
  );
};
export default Contact_us1;
