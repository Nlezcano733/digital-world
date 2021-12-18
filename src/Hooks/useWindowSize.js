import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState();

  const handleResize = () => {
    setWindowSize(window.outerWidth);
    // setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    status: windowSize >= 1024 ? true : false,
    size: windowSize,
  };
};

export default useWindowSize;
