"use client";

import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const LottieAnimationWrapper = ({
  animationData,
  loop = true,
  autoplay = true,
  style = {},
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
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
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} style={style}></div>;
};

export default LottieAnimationWrapper;
