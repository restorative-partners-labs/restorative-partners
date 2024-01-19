'use client'
import "../assets/scss/main.scss";
import AOS from 'aos'
import { useEffect } from "react";
const Wrapper =({children})=>{

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  
  }, []);


  return(
  <div >{children}</div>
  )
  
}
export default Wrapper;
