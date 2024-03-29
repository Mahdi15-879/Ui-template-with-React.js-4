import React, { useRef, useEffect } from "react";

import "../Styles/CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    function handleMoseOver(event) {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
    document.addEventListener("mousemove", handleMoseOver);
    return () => document.removeEventListener("mousemove", handleMoseOver);
  }, []);

  return (
    <div className="CustomCursor" ref={cursorRef}>
      scroll
    </div>
  );
};

export { CustomCursor };
