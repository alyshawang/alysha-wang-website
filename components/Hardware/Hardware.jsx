import styles from "./Hardware.module.css";

import Image from "next/image";

import hardware from "../../public/Images/hardware.svg";

export default function Hardware() {
  return (
    <div id="readmore" className="m-horizontal">
      <div className={styles.container}>
        <Image className={styles.image} src={hardware} />
        <p className={styles.title}>HARDWARE</p>
      </div>
    </div>
  );
}
