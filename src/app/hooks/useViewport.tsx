import { useEffect, useState } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {

    const handleWindowResize = () => setWidth(window.innerWidth);


    setWidth(window.innerWidth);


    window.addEventListener('resize', handleWindowResize);

    // Remove event listener on component unmount to avoid memory leaks
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []); 

  // Calculate device types based on width
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024 && width < 1280;
  const isLargeDesktop = width >= 1280;

  return { width, isMobile, isTablet, isDesktop, isLargeDesktop };
};

export default useViewport;
