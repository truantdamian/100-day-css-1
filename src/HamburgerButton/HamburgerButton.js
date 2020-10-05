import React,{useState} from "react";
import "./HamburgerButton.css";

const HamburgerButton = ()=>{

  const [clicked,setClicked]=useState(false);

  const handleClick=()=>{
    setClicked(!clicked);
  }

  return (
    <div className="hamburger-button" onClick={()=>setClicked(!clicked)}>
      <div className={`hamburger-line ${clicked?'hamburger-line-top-animate':'hamburger-line-top-init'}`}></div>
      <div className={`hamburger-line ${clicked?'hamburger-line-middle-animate':'hamburger-line-middle-init'}`}></div>
      <div className={`hamburger-line ${clicked?'hamburger-line-bottom-animate':'hamburger-line-bottom-init'}`}></div>
    </div>
  )

}


export default HamburgerButton;