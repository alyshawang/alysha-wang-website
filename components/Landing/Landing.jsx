import styles from "./Landing.module.css"
import NavBar from "@/components/NavBar/NavBar";
import whale from "../../public/Images/whalee.svg";
import phone from "../../public/Images/phone.svg";
import cloud from "../../public/Images/cloud.svg";
import React, { useEffect, useRef , useState} from 'react';

import Image from "next/image";

import Loading from "../Loading/Loading"

import sig from "../../public/Images/sg.svg";

// export default function Landing() {
//     return <div className = "fade"><div className={styles.container}>
        
//         <div className={styles.imageContainer}>
//         <NavBar/>
//             <Image className = {styles.image} src={whale}/>
//     </div>
//                 <div className="m-horizontal">
//                     <div className={styles.text}>
//                         <h1 className={styles.header}>Hi, I&apos;m Alysha</h1>
//                         <p className={styles.subheader}>Software Engineering Student @ UWaterloo</p>
//                     </div>
//                 </div>
//             </div>
//             </div>
// }


export default function Landing() {
    const movingTextRef = useRef(null);
    const [loadingComplete, setLoadingComplete] = useState(false); // State to track loading completion

    useEffect(() => {
        const movingText = movingTextRef.current;
        const textWidth = movingText.offsetWidth; // Get the width of the moving text container
        const animationDuration = textWidth * 20; // Adjust animation duration based on text width

        const animateText = () => {
            movingText.style.transform = `translateX(2%)`; // Start position on the screen
            movingText.style.transition = 'none';

            // Triggering a reflow to ensure the animation restarts smoothly
            movingText.offsetHeight;

            movingText.style.transform = 'translateX(-100%)'; // Move text to the left
            movingText.style.transition = `transform ${animationDuration}ms linear`;

            setTimeout(() => {
                animateText();
            }, animationDuration);
        };
        animateText();
        setTimeout(() => {
            setLoadingComplete(true);
          }, 2000); // 3 seconds delay for example
    }, []);

    
    return <>       <Loading onLoadingComplete={() => setLoadingComplete(true)} /> {/* Pass a callback to handle loading completion */}

    <div className = "fade"><div className={styles.container}>
      
    <Image className={`${styles.image} cloud`} src={cloud} />
        {/* <div className = {styles.topBar}></div> */}

        <div className={styles.imageContainer}>
        {/* <Image src={sig} className={styles.sig}/> */}
        <NavBar loadingComplete={loadingComplete} />
            </div>
    <div id="projects" className={`${styles.movingTextContainer} moving-text-container`} ref={movingTextRef}>
                <h1 className={styles.move}> ALYSHA WANG - ALYSHA WANG - ALYSHA WANG - ALYSHA WANG - ALYSHA WANG - </h1>
            </div>
                    <div className={styles.text}>
                    <p
              className={`${styles.subheader} ${
                loadingComplete ? styles.typingAnimationStarted : ''
              }`}>Software Engineering Student @ UWaterloo</p>
                        
                    
                </div>
                
            </div>
            

        </div>
        </>
}