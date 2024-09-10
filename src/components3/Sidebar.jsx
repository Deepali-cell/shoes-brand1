import { sidearray } from "../store/BrandStore";
import styles from "./Sidebar.module.css";

function Sidebar({ handlechange, filtercategory }) {
  return (
    <>
      <div className={styles.sidebar}>
        <input
          type="text"
          className={styles.search}
          placeholder="search here"
          onChange={handlechange}
        />
        <nav>
          <ul className={styles.category}>
            {sidearray.map((category, index) => (
              <li key={index} onClick={() => filtercategory(category.type)}>
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Sidebar;
