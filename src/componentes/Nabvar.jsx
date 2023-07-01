import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Nabvar.module.css";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/" className={styles.navbarLink}>Home</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/contacto" className={styles.navbarLink}>Contacto</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/destacados" className={styles.navbarLink}>Destacados</Link>
        </li>
      </ul>
      <button className={styles.button} onClick={toggleTheme}>
        Cambiar Tema
      </button>
    </nav>
  );
};

export default Navbar;













