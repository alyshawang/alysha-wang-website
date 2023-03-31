import React, { useEffect, useRef, useState } from 'react';
import './Projects.module.css';

function ScrollAnimation() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className={`fade-in-drop-in ${inView ? 'in-view' : ''}`} ref={ref}>
      <h1>Hello, World!</h1>
      <p>Some content here...</p>
    </div>
  );
}

export default ScrollAnimation;
