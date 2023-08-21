import React, { useEffect, useState , useRef} from 'react';
import styles from './Loading.module.css'; // Create a CSS module for styling
import {preLoaderAnim} from "../animate"
import { useRouter } from 'next/router'; // Import the useRouter hook

// const Loading = ({ onFinishLoading }) => {
//   const [showWelcome, setShowWelcome] = useState(true);

//   useEffect(() => {
//     // Simulate a delay before transitioning to the landing page
//     const delay = setTimeout(() => {
//       setShowWelcome(false);
//     }, 2000); // Adjust the delay time as needed

//     // When the delay is finished, trigger the onFinishLoading callback
//     return () => {
//       clearTimeout(delay);
//       onFinishLoading();
//     };
//   }, [onFinishLoading]);

//   return (
//     <div className={`${styles.loading} ${showWelcome ? styles.showWelcome : ''}`}>
//       <h1>Welcome</h1>
//     </div>
//   );
// };


const Loading = () =>{
    const router = useRouter(); // Initialize the router
    const landingPageRef = useRef(null);

    useEffect(() => {
        // Apply overflow: hidden to body and html while the loading screen is active
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    
        // Simulate a delay before hiding the loading page
        const delay = setTimeout(() => {
          // Remove overflow: hidden to allow scrolling when the loading page disappears
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
          if (landingPageRef.current) {
            landingPageRef.current.scrollIntoView({ behavior: 'auto' }); // Use 'auto' to jump without smooth scrolling
          }
        }, 3000); // Adjust the delay time as needed
    
        // Optionally, re-enable scrolling when the component unmounts
        history.scrollRestoration = 'manual';
      }, []);
    useEffect(()=>{
        preLoaderAnim()
        },[]);
    return(
        
        <div className="preloader">
            
            <div className="texts-container">
                <span>
                     Wel
                </span>
                <span>
                     come.
                </span>
                {/* <span>
                     me.
                </span> */}
            </div>
        </div>
    )
}
export default Loading;
