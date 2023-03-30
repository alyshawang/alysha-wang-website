import styles from "./Software.module.css"

import Image from "next/image";

import software from "../../public/Images/software.svg";


export default function Software() {
    return <div id="readmore" className = "m-horizontal">
        <div className = {styles.container}>
            <div>
            <p className={styles.title}>SOFTWARE</p>
            <p></p>
            </div>
            <Image className = {styles.image} src={software}/>
            </div>
    </div>
}

