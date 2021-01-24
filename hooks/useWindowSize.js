import { useState, useEffect } from 'react';

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState({});

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    if (process.browser) {
      setWindowSize(getSize());
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (process.browser) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [process.browser]);

  return windowSize;
}

module.exports = useWindowSize;