import React,{useState} from 'react'
import axios from "axios"
import {motion} from "motion/react"
import { toast } from 'react-toastify';

// Parent Container Variant
const container = {
  hidden:{},
  visible:{
    transition:{
      staggerChildren: 0.4,
      delayChildren: 0.3
    }
  }
}

// children container Variant
const child_container = {
  hidden: { opacity:0,x:50 },
  visible: { 
    opacity:1,
    x:0,
    transition: { duration: 0.5 }
  }
}


const Contact = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleForm = async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`/api/email/send-email`,form)
      toast.dismiss();
      toast.success(res.data.message)
      // alert(res.data.message);
      setForm({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      toast.error("something went wrong")
    }finally{
      setLoading(false);
    }
  }


  return (
    <>
    <hr id="Contact_section" style={{margin:"3rem",backgroundColor:"#2c292c",border:"none",height:"1px"}}/>
      <div className="contact_wrapper">
        <p style={{color:"purple",fontSize:"18px",fontFamily:"var(--primary-font)"}}>Let's Talk</p>
        <h2 style={{color:"#fff",fontSize:"3.50rem",fontFamily:"var(--primary-font)"}}>Contact</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible" 
          viewport={{once: true,amount: 0.4}}
          className="innerContact_wrapper"
          >
          <motion.div
            variants={child_container} 
            className="para_container">
            <p>Have a question or a project in mind?Feel free to reach out.<br/>
              Location : <strong>Delhi, Rohini sector-38</strong></p>
          </motion.div>
          <motion.div 
            variants={child_container} 
            className="form_container"
          >
            <form onSubmit={handleForm}>
              <input name="name" type="text" value={form.name} placeholder='Name' onChange={handleChange} required/>
              <input name="email" type="email" value={form.email} placeholder='Email' onChange={handleChange} required/>
              <textarea name="message" rows="10" value={form.message} cols="30" required onChange={handleChange} placeholder='Message'></textarea>
              <motion.button 
                disabled={loading}
                style={{
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? "not-allowed" : "pointer"
                }}
                whileTap={!loading?{ 
                  scale: 0.8,
                  backgroundColor: "#2c2c2c"
                }:{}}
                type='submit'
                >
                  {loading ? (<div className="loader_center">
                              <div className="loader"></div>
                            </div>)
                    :'Submit'}
                </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Contact