import React, { useState, useContext } from 'react';

const MobileContext = React.createContext();

const UpdateMobileContext = React.createContext();

export const useMobile = () => {
  return useContext(MobileContext);
};

export const useUpdateMobile = () => {
  return useContext(UpdateMobileContext);
};

export const handleTextImgSize = (
  isMobile,
  smallTextImgSize,
  largeTextImgSize
) => {
  if (!isMobile) {
    return largeTextImgSize;
  } else {
    return smallTextImgSize;
  }
};

const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isStyleMobile, setIsStyleMobile] = useState('');

  const setMobile = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      // console.log("I am mobile !");
      setIsStyleMobile('mobile');
    } else {
      setIsMobile(false);
      // console.log("I am not mobile!");
      setIsStyleMobile('not-mobile');
    }
  };

  return (
    <MobileContext.Provider
      value={{ isMobile, isStyleMobile, handleTextImgSize }}
    >
      <UpdateMobileContext.Provider value={setMobile}>
        {children}
      </UpdateMobileContext.Provider>
    </MobileContext.Provider>
  );
};

export default MobileProvider;
