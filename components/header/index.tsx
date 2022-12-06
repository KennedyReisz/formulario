// Import's
import Link from "next/link";

// Asset's
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>Kreativ</h1>

      <nav className={styles.navbar}>
        <Link href={"/"}><a className={styles.navItem}>Home</a></Link>
        <Link href={"/"}><a className={styles.navItem}>Contact</a></Link>
      </nav>
    </header>
  );
};

export default Header;
