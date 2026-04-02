import React from 'react'
import codex from "../assets/codex.avif"
import todo from "../assets/todo.avif"
import weather from "../assets/weather.avif"
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "motion/react";

// Parent container (controls stagger)
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // 👈 delay between children
      delayChildren: 0.5,
    },
  },
};

// Child animation
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};


const MyProjects = () => {
  return (
    <div className="myProjectWrapper">
        <p style={{color:"purple",fontSize:"18px",fontFamily:"var(--primary-font)"}}>My Work</p>
        <p style={{color:"#fff",fontSize:"3.50rem",fontFamily:"var(--primary-font)"}}>Projects</p>
        <br/>
        <motion.div
            className="innerProjectWrapper"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {data.map((item,index)=>{
                return(
                    <motion.div 
                        key={item.id} 
                        className="project_card"
                        variants={cardVariant}
                    >
                        <div className="card_image">
                            <a href={item.web_url} target="_blank">
                                <motion.img  
                                whileHover={{scale: 1.1}}
                                transition={{duration: 0.5}}
                                src={item.image} 
                                alt={item.title}
                            />
                            </a>
                        </div>
                        <div className="card_content">
                            <div className="left_content">
                                <h3>{item.title}</h3>
                                <p>{item.status}</p>
                            </div>
                            <div className="right_content">
                                <ul>
                                    <motion.li
                                        whileHover={{
                                            backgroundColor: "#2c292c"
                                        }}
                                    >
                                        <a href={item.repo_url} target="_blank" ><FaCode /></a>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{
                                            backgroundColor: "#2c292c"
                                        }}
                                    >
                                        <a href={item.web_url} target='_blank'><MdOutlineArrowOutward /></a>
                                    </motion.li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </motion.div>
        
        <motion.a
            whileHover={{
                scale: 0.9,
                backgroundColor: "#2c292c"
            }}
            className='github_repo' 
            href="https://github.com/naveen-sajwan?tab=repositories"
            target='_blank'
        >
                <div>More Projects on</div>
                <div className='githubrepo_icon'><FaGithub/></div>
        </motion.a>
    </div>
  )
}

const data = [
    {
        id: 1,
        image: codex,
        title: "Codex-Ebook",
        status: "Deployed",
        web_url: "https://codex-render-ebook.onrender.com",
        repo_url: "https://github.com/naveen-sajwan/codex_render"
    },{
        id: 2,
        image: todo,
        title: "Todo_Karo_Web",
        status: "Deployed",
        web_url: "https://todo-karo.vercel.app/",
        repo_url: "https://github.com/naveen-sajwan/todoKaro"
    },{
        id: 3,
        image: weather,
        title: "Weather_Web",
        status: "development",
        web_url: "https://weather-app-five-phi-96.vercel.app/",
        repo_url: "https://github.com/naveen-sajwan/weather_app"
    }
]

export default MyProjects