import Items from "./Items";
import styles from "./Menu.module.css";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { myarray } from "../store/BrandStore";

const Menu = () => {
  const [show, setshow] = useState(myarray);
  const [type, settype] = useState("All");

  const handlechange = (e) => {
    const searchval = e.target.value;
    if (searchval === " ") {
      setshow(myarray);
    } else {
      const filter = myarray?.filter((item) =>
        item.name.toLowerCase().includes(searchval.toLowerCase())
      );
      setshow(filter);
    }
  };
  const filtercategory = (type) => {
    if (type === "All") {
      setshow(myarray);
      settype("All");
    } else {
      const filter = myarray?.filter((item) =>
        item.type.toLowerCase().includes(type.toLowerCase())
      );
      setshow(filter);
      settype(type);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.menu}>
        <Sidebar
          handlechange={handlechange}
          filtercategory={filtercategory}
        ></Sidebar>
        <div className={styles.options}>
          <Items show={show}></Items>
        </div>
      </div>
    </>
  );
};
export default Menu;
