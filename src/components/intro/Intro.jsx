import "./intro.scss";
import {KeyboardArrowDown} from "@material-ui/icons";
import {init} from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Software Developer", "Content Creator"]
    });
  }, []);
 
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile.jpg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
         <h2>Hi there, I'm</h2>
          <h1>Juno Hyun</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <KeyboardArrowDown className="icon"/>
        </a>
      </div>
    </div>
  )
}
