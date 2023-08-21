import React, { useEffect, useState, useRef } from "react";
import styles from "./Loading.module.css";
import { preLoaderAnim } from "../animate";
import { useRouter } from "next/router";

const Loading = () => {
  const router = useRouter(); //router initialize
  const landingPageRef = useRef(null);

  useEffect(() => {
    // overflow: hidden to body and html while the loading screen is active
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // delay before hiding the loading page
    const delay = setTimeout(() => {
      // remove overflow: hidden to allow scrolling when the loading page disappears
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      if (landingPageRef.current) {
        landingPageRef.current.scrollIntoView({ behavior: "auto" }); //  'auto' to jump without smooth scrolling
      }
    }, 3000);

    // scroll top
    history.scrollRestoration = "manual";
  }, []);
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Wel</span>
        <span>come.</span>
        {/* <span>
                     me.
                </span> */}
      </div>
    </div>
  );
};
export default Loading;
