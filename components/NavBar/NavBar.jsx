import styles from "./NavBar.module.css";

import Link from "next/link";

const links = [
  { link: "#projects", text: "Projects", newPage: false },
  { link: "#contact", text: "Contact", newPage: false },
  { link: "/resume3.pdf", text: "Resume", newPage: true },
];

export default function NavBar({ loadingComplete }) {
  return (
    <div>
      <ul className={styles.list}>
        {links.map((navbarlink, index) => (
          <li
            className={`${styles.bar} ${loadingComplete ? styles.active : ""}`}
            key={`link-${index}`}
          >
            {navbarlink.newPage ? (
              <a href={navbarlink.link} target="_blank" rel="noreferrer">
                {navbarlink.text}
              </a>
            ) : (
              <Link href={navbarlink.link}>{navbarlink.text}</Link>
            )}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
