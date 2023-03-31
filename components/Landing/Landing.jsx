import styles from "./Landing.module.css"
import NavBar from "@/components/NavBar/NavBar";
import whale from "../../public/Images/whalee.svg";
import phone from "../../public/Images/phone.svg";

import Image from "next/image";


export default function Landing() {
    return <div className = "fade"><div className={styles.container}>
        
        <div className={styles.imageContainer}>
        <NavBar/>
            <Image className = {styles.image} src={whale}/>
    </div>
                <div className="m-horizontal">
                    <div className={styles.text}>
                        <h1 className={styles.header}>Hi, I&apos;m Alysha</h1>
                        <p className={styles.subheader}>Software Engineering Student @ UWaterloo</p>
                    </div>
                </div>
            </div>
            </div>
}

