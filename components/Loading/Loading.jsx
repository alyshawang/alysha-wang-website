import React, { useEffect, useState } from 'react';
import styles from './Loading.module.css'; // Create a CSS module for styling

const Loading = ({ onFinishLoading }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Simulate a delay before transitioning to the landing page
    const delay = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // Adjust the delay time as needed

    // When the delay is finished, trigger the onFinishLoading callback
    return () => {
      clearTimeout(delay);
      onFinishLoading();
    };
  }, [onFinishLoading]);

  return (
    <div className={`${styles.loading} ${showWelcome ? styles.showWelcome : ''}`}>
      <h1>Welcome</h1>
    </div>
  );
};

export default Loading;
