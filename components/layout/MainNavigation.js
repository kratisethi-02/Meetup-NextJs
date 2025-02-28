import { useState } from "react";
import Link from "next/link";
import styles from "./MainNavigation.module.css"; // Import the updated CSS

function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuHandler() {
    setMenuOpen(prev => !prev);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>NextJS Connects</div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenuHandler}>
        <div />
        <div />
        <div />
      </div>

      {/* Navigation Links */}
      <ul className={`${styles["nav-links"]} ${menuOpen ? styles.open : ""}`}>
        <li>
          <Link href="/">All Connects</Link>
        </li>
        <li>
          <Link href="/new-meetup">Add Connects</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
