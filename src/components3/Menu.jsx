import Items from "./Items";
import styles from "./Menu.module.css";
import Header from "../components/Header";

const Menu = () => {
  return (
    <>
      <Header />
      <div className={styles.menubar}>
        <Items></Items>
      </div>
    </>
  );
};
export default Menu;
