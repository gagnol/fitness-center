import React, { useEffect, useState } from "react";
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import { styled } from "@mui/material";




export const ScrollToTop = () => {
  const [setVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    setVisible?(
     <StyledScroll>
        <PresentToAllIcon onClick={ScrollToTop} />
        </StyledScroll>):(
          <div></div>
        )
    
    
  );
};

const StyledScroll = styled("div")(({ theme }) => ({
  height:'40px',
  width: '40px',
  position: 'fixed',
  bottom: '3%',
  right: '2%',
  backgroundColor: '#111',
  borderRadius: '30%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.4s all ease',
  zIndex: '1000',
  fontSize: '15px',
  color: '#fff',
  boxShadow: '2px 2px 5px #BABECC,-5px -5px 10px #ffffff73'
}));
