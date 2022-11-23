import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <ul className={styles.list}>
      <li>
        <Link to="/" className={styles.link}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/products" className={styles.link}>
          Lista de produtos
        </Link>
      </li>
      <li>
        <Link to="/profile" className={styles.link}>
          Profile Page
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
