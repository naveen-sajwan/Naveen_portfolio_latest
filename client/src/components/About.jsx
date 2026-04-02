import React,{useState} from 'react'
import "../App.css"
import LetterGlitch from './LetterGlitch';

const About = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggle = (id)=>{
    if(selected === id){
      return setSelected(null);
    }
    setSelected(id);
  }


  return (
    <>
    <div className="accordian_wrapper" id="about_section">
      <div>
        <h1 style={{
          fontFamily:"var(--primary-font)",
          color:"#fff",
          fontSize:"40px"
        }}>What I Do?</h1><br/>
      <div className="Accordian">
        {data.map((item,index)=>{
          return(
            <div key={item.id} className="item">
              <div onClick={() => toggle(item.id)}  className="title">
                <h2>{item.title}</h2>
                <span className="Accord_toggle">
                  {selected === item.id?"-":"+"}
                </span>
              </div>
              <div className={selected === item.id?"content show":"content"}>
                <hr/><br/>
                <p>{item.content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
      
      <div className='glitch_fade' style={{ width: '500px', height: '200px', position: 'relative' }}>
        <LetterGlitch
          glitchColors={["#761576"]}
          glitchSpeed={25}
          centerVignette={false}
          outerVignette={true}
          smooth={false}
        />
      </div>
    </div>

    <hr id="MyProject_section" style={{margin:"3rem",backgroundColor:"#2c292c",border:"none",height:"1px"}}/>
    </>
  )
}

const data = [
  {
    id: 1,
    title: "Web Development",
    content: "MERN Stack Developer building scalable full-stack web applications with React, Node.js, and MongoDB.",
  },
  {
    id: 2,
    title: "API Integration",
    content: "MERN Stack Developer experienced in building full-stack applications and integrating third-party APIs for dynamic, data-driven solutions.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    content: "MERN Stack Developer focused on clean code, scalable architecture, and intuitive UI/UX design.",
  }
];

export default About