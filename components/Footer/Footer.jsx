import styles from "./Footer.module.css"
import Image from "next/image";
import cn from "../../public/Images/toronto.svg";

export default function Footer(){
    return <div className={styles.footer}>
                <Image className = {styles.image} src={cn}/>
        <div className = "m-horizontal"> 
        
        <a href= "#">

        <p className={styles.name}>2023 ALYSHA WANG</p>
        </a>
        </div>
    </div>
}