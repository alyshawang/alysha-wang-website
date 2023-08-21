import React, { useEffect, useState } from "react";
import styles from "./FixedNav.module.css";
import Link from "next/link";

const links = [
  { link: "#", text: "Alysha Wang", newPage: false },
  { link: "#projects", text: "Projects", newPage: false },
  { link: "#contact", text: "Contact", newPage: false },
  { link: "/resume2.pdf", text: "Resume", newPage: true },
];

export default function FixedNav() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // check if the user has scrolled to "Projects"
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top <= 0) {
          setShowNavbar(true); // show  navigation bar
        } else {
          setShowNavbar(false); // hide navigation bar
        }
      }
    };

    //  scroll event listener
    window.addEventListener("scroll", handleScroll);

    // remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ul className={`${styles.list} ${showNavbar ? styles.show : ""}`}>
        {links.map((navbarlink, index) => (
          <li key={`link-${index}`}>
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
