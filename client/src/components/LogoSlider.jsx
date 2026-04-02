import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const LogoSlider = () => {
  return (
    <div className="carousel">
        <div className="group">
            <div className="card">< FaHtml5 />HTML</div>
            <div className="card"><FaCss3Alt /> CSS3</div>
            <div className="card"><IoLogoJavascript/> Javascript</div>
            <div className="card"><FaNodeJs />NodeJs</div>
            <div className="card"><SiExpress />ExpressJs</div>
            <div className="card"><FaReact />ReactJs</div>   
        </div>
        <div aria-hidden className="group">
            <div className="card"><FaHtml5/> HTML</div>
            <div className="card"><FaCss3Alt />CSS3</div>
            <div className="card"><IoLogoJavascript /> Javascript</div>
            <div className="card"><FaNodeJs />NodeJs</div>
            <div className="card"><SiExpress/>ExpressJs</div>
            <div className="card"><FaReact />ReactJs</div>   
        </div>
    </div>
  )
}

export default LogoSlider