import Items from "./Items";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <>
      <div className={styles.menubar}>
        <Items></Items>
      </div>
    </>
  );
};
export default Menu;
