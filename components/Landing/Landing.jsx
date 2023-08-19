import styles from "./Landing.module.css"
import NavBar from "@/components/NavBar/NavBar";
import whale from "../../public/Images/whalee.svg";
import phone from "../../public/Images/phone.svg";
import cloud from "../../public/Images/cloud.svg";
import React, { useEffect, useRef } from 'react';

import Image from "next/image";


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
    }, []);

    return <div className = "fade"><div className={styles.container}>
        <Image className = {styles.image} src={cloud}/>
        {/* <div className = {styles.topBar}></div> */}

        <div className={styles.imageContainer}>
        <NavBar/>
            </div>
    <div className={`${styles.movingTextContainer} moving-text-container`} ref={movingTextRef}>
                <h1 className={styles.move}> ALYSHA WANG - ALYSHA WANG - ALYSHA WANG - ALYSHA WANG - ALYSHA WANG - </h1>
            </div>
                    <div className={styles.text}>
                        <p className={styles.subheader}>Software Engineering Student @ UWaterloo</p>
                        
                    
                </div>
                
            </div>
            

        </div>
}
// import styles from "./Landing.module.css";
// import NavBar from "@/components/NavBar/NavBar";
// import cloud from "../../public/Images/cloud.svg";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function Landing() {
//   const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
//   const movingTextRef = useRef(null);

//   useEffect(() => {
//     const animateText = () => {
//       const movingText = movingTextRef.current;

//       if (movingText) {
//         const textWidth = movingText.offsetWidth;
//         const animationDuration = textWidth * 20;

//         movingText.style.transform = `translateX(2%)`;
//         movingText.style.transition = "none";

//         // Triggering a reflow to ensure the animation restarts smoothly
//         movingText.offsetHeight;

//         movingText.style.transform = "translateX(-100%)";
//         movingText.style.transition = `transform ${animationDuration}ms linear`;

//         setTimeout(() => {
//           animateText();
//         }, animationDuration);
//       }
//     };

//     if (showWelcomeScreen) {
//       setTimeout(() => {
//         setShowWelcomeScreen(false);
//         animateText();
//       }, 2000); // Show the welcome screen for 2 seconds
//     } else {
//       animateText();
//     }
//   }, [showWelcomeScreen]);

//   return (
//     <div className={`fade ${showWelcomeScreen ? styles.blackScreen : ""}`}>
//       {showWelcomeScreen ? (
//         <div className={styles.welcomeContainer}>
//           <h1 className={styles.welcomeText}>Welcome</h1>
//         </div>
//       ) : (
//         <div className={styles.container}>
//           <Image className={styles.image} src={cloud} />

//           <div className={styles.imageContainer}>
//             <NavBar />
//           </div>

//           <div
//             className={`${styles.movingTextContainer} moving-text-container`}
//             ref={movingTextRef}
//           >
//             <h1 className={styles.move}>
//               ALYSHA WANG - ALYSHA WANG - ALYSHA WANG - ALYSHA WANG - ALYSHA WANG -
//             </h1>
//           </div>

//           <div className={styles.text}>
//             <p className={styles.subheader}>
//               Software Engineering Student @ UWaterloo
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
