import styles from "./Footer.module.css"

export default function Footer(){
    return <div className={styles.footer}>
        <div className = "m-horizontal"> 
        <a href= "#">
        <p className={styles.name}>2023 ALYSHA WANG</p>
        </a>
        </div>
    </div>
}