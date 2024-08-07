import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <FaWhatsapp className={styles.icon} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/fuxion_logo.png" alt="Fuxion" width="160px" height="69px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <FaInstagram className={styles.icon} />
        <FaTiktok className={styles.icon} />
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
