import styles from "./Projects.module.css"
import Image from "next/image";

import green from "../../public/Images/green.svg";

export default function Projects() {
    return <div className = "m-horizontal"> 
        <h1 id="projects" className = {styles.project}>Projects</h1>

        <div className ={styles.cards}>

        <div className={styles.projectContainer}>
        <div>
        <h2 className = {styles.title}>01. MOTORIZED FISH-CONTROLLED VEHICLE</h2>
        <p className = {styles.subtext}>An autonomous vehicle controlled by a live fish or joystick using OpenCV, a Raspberry Pi, and an algorithm coded in Node.js. Virtual joystick programmed with HTML and Javascript.</p>
        <p className = {styles.subtext2}><strong>Technologies:</strong> Javascript, HTML, OpenCV, Node.js, WPILib, Python</p>
        <a href="https://github.com/alyshawang/motorized-fish-controlled-vehicle" target="_blank">
        <p className = {styles.link}>GitHub Repo →</p>
        </a>
        <a href="readmore">
        <p className = {styles.link}>Read More →</p>
        </a>
        </div>
        <Image src={green}/>
        </div>

        <div className={styles.projectContainer}>
        <Image className src={green}/>
        <div>
        <h2 className = {styles.title}>02. Personal Website</h2>
        <p className = {styles.subtext}>A personal website designed in Figma and created with HTML, CSS, Javascript, and React to showcase projects and experiences.</p>
        <p className = {styles.subtext2}><strong>Technologies:</strong> React.js, Next.js, JavaScript, HTML, CSS</p>
        <a href="https://github.com/alyshawang/alysha-wang-website" target="_blank">
        <p className = {styles.link}>GitHub Repo →</p>
        </a>
        </div>
        </div>

        <div className={styles.projectContainer}>
        <div>
        <h2 className = {styles.title}>03. MATH QUIZ</h2>
        <p className = {styles.subtext}>An interactive program with a graphical user interface developed using Java and Java Swing to test the user’s knowledge on various mathematics topics.</p>
        <p className = {styles.subtext2}><strong>Technologies:</strong> Java, JavaSwing, Eclipse Window Builder</p>
        <a href="https://github.com/alyshawang/math-quiz" target="_blank">
        <p className = {styles.link}>GitHub Repo →</p>
        </a>
        </div>
        <Image src={green}/>
        </div>
        </div>


    </div>
}