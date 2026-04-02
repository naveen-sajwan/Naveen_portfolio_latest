import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import '../App.css';
import LogoSlider from "./LogoSlider";
import {motion} from "motion/react"

const Header = () => {
  return (
    <>
        <div  className="wrapper" id="Home_section">
            <div className="header">
                <div className="inner_header">
                    <p>Hi, I'm Naveen Sajwan</p>
                    <h1>Software<br/>Developer</h1>
                </div>
                <div className="inner_header_text">
                    Transforming ideas into interactive and seamless digital experiences with cutting-edge <strong id="highlight">frontend</strong> development.
                </div>
            </div>
            
            <div className="header_social_links">
                <ul className="inner_social_links">
                    {social_links.map((social)=>{
                        return(
                            <motion.li 
                                whileHover={{
                                    backgroundColor: "#383838c4"
                                }}
                                key={social.id} 
                                className="social_links"
                            >
                                <a href={social.socialLinks} target="_blank">{social.icon}</a>
                            </motion.li>
                        )
                    })}
                    
                </ul>
            </div>
            <LogoSlider/>
        </div>
    </>
  )
}

const social_links = [
    {
        id: 1,
        socialLinks: "https://github.com/naveen-sajwan",
        icon: <FaGithub/>
    },
    {
        id: 2,
        socialLinks: "https://www.linkedin.com/in/naveen-sajwan-b41921386/",
        icon: <FaLinkedin/>
    },{
        id: 3,
        socialLinks: "mailto:naveensajwan724@gmail.com",
        icon: <SiGmail/>
    }
]

export default Header;