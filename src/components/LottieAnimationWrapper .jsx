"use client";

import lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";

const LottieAnimationWrapper = ({
  animationData,
  loop = true,
  autoplay = true,
  style = {},
}) => {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    const animationInstance = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: loop,
      autoplay: autoplay,
      animationData: animationData,
    });

    return () => {
      animationInstance.destroy();
    };
  }, [animationData, loop, autoplay, isMounted]);

  if (!isMounted) {
    return <div ref={containerRef} style={style}></div>;
  }

  return <div ref={containerRef} style={style}></div>;
};

export default LottieAnimationWrapper;
