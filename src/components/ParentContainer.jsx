import { useState } from "react";
import { useThrottle, throttle } from "./useThrottle";

export const ParentComponent = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function resizeEventHandler(e) {
    console.info("~resize", e);
    // setWindowSize({
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    // });
  }

  const throttledResize = throttle(resizeEventHandler, 3000);

  window.addEventListener("resize", throttledResize);

  return (
    <div>
      Display Size ${windowSize.width}X{windowSize.height}
    </div>
  );
};
