import React,{useState,useEffect} from 'react'
import axios from "axios"
import {motion} from "motion/react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHeart } from "react-icons/fa";


const Footer = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchLikes();

    const hasLiked = localStorage.getItem("liked");
    if(hasLiked === 'true'){
      setLiked(true);
    }
  }, [])

  const fetchLikes = async()=>{
    const res = await axios.get(`/api/likes`);
    setLikes(res.data.likes);
  }

  const handleLike = async() =>{
    if(liked) return;

    const res = await axios.post(`/api/likes`);
    setLikes(res.data.likes);
    setLiked(true)
    localStorage.setItem("liked","true");
  };

  return (
    <>
      <hr style={{margin:"3rem",backgroundColor:"#2c292c",border:"none",height:"1px"}}/>
        <div className="outer_footer_wrapper">
          <div className="innerWrapper">
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
            <div className="like_container" onClick={handleLike}>
              <div className="like_container_inner">
                <p><FaHeart /></p>
              </div>
              <div className="like_container_inner">
                {likes} Likes
              </div>
            </div>
          </div>
          <div className="innerWrapper">
            <div className="wrapper">Built on MERN Stack</div>
            <div className="wrapper">Styled with CSS3</div>
            <div className="wrapper">Deployed on Vercel</div>
          </div>
        </div>
        <hr style={{margin:"3rem",backgroundColor:"#2c292c",border:"none",height:"1px"}}/>
        <div className="copyright">
          <p className="text_center">
            Copyright © {currentYear}  Naveen Sajwan. All rights reserved.
          </p>
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

export default Footer