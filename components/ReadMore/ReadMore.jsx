import styles from "./ReadMore.module.css";

import Image from "next/image";

import capy from "../../public/Images/capy.svg";

export default function Landing() {
  return (
    <div className={styles.image}>
      <div id="readmore" className="m-horizontal">
        <h1 className={styles.title}>MOTORIZED FISH-CONTROLLED VEHICLE</h1>
      </div>
    </div>
  );
}
