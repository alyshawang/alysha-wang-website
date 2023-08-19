import styles from "./Projects.module.css"
import Image from "next/image";

import green from "../../public/Images/green.svg";
import capyy from "../../public/Images/capyy.svg";
import tank from "../../public/Images/tank.svg";

import tank2 from "../../public/Images/fish2.svg";
import FixedNav from "@/components/FixedNav/FixedNav";

import React, { useEffect, useRef, useState } from "react";

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
  
    return (
        <div className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`} ref={domRef}>
        {props.children}
      </div>
    );
  }

export default function Projects() {
    

    return <div >
                <FixedNav/>
                <div className = "m-horizontal">
        <h1 id="projects" className = {styles.project}>Projects</h1>
        <div className ={styles.cards}>

        <FadeInSection>
        <div className={styles.projectContainer}>
        <div>
        <h2 className = {styles.title}>01. MOTORIZED FISH-CONTROLLED VEHICLE</h2>
        <p className = {styles.subtext}>An autonomous vehicle controlled by a live fish or joystick using OpenCV, a Raspberry Pi, and an algorithm coded in Node.js. Virtual joystick programmed with HTML and Javascript.</p>
        <p className = {styles.subtext2}><strong className= {styles.strong}>Technologies:</strong> Javascript, HTML, OpenCV, Node.js, WPILib, Python</p>
        <a href="https://github.com/alyshawang/motorized-fish-controlled-vehicle" target="_blank">
        <p className = {styles.link}>GitHub Repo →</p>
        </a>
        <a href="readmore">
        <p className = {styles.link}>Read More →</p>
        </a>
        </div>
        <Image className = {styles.image} src={tank2}/>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className={styles.projectContainer}>
        <Image className={styles.image} src={capyy}/>
        <div>
        <h2 className = {styles.title}>02. E-COMMERCE WEB SCRAPER</h2>
        <p className = {styles.subtext}>A web scraper application, built in Python, that extracts and store product data from Brandy Melville and Stussy using MongoDB and Flask, compiling two websites into one.</p>
        <p className = {styles.subtext2}><strong>Technologies:</strong> Python, Selenium, MongoDB, Flask, Pandas, Javascript, React.js, Next.js, CSS</p>
        <a href="https://github.com/alyshawang/alysha-wang-website" target="_blank">
        <p className = {styles.link}>GitHub Repo →</p>
        </a>
        </div>
        </div>
        </FadeInSection>

        <FadeInSection>
        <div className={styles.projectContainer}>
        <div>
        <h2 className = {styles.title}>03. PLAYLIST CONVERTER</h2>
        <p className = {styles.subtext}> Full-stack application with a Python algorithm to interact with RESTful APIS and a Flask backend, converting user&apos;s Spotify playlists to YouTube ones.</p>
        <p className = {styles.subtext2}><strong>Technologies:</strong> Flask, Python, React.js, Javascript, Next.js, CSS </p>
        <a href="https://github.com/alyshawang/math-quiz" target="_blank">
        <p className = {styles.link}>GitHub Repo →</p>
        </a>
        </div>
        <Image className = {styles.image} src={green}/>
        </div>
        </FadeInSection>

        </div>

        </div>
    </div>
}