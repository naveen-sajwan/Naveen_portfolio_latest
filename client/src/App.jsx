import { useState } from 'react'
import Header from "./components/Header"
import About from "./components/About"
import MyProjects from "./components/MyProjects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar/>
      <Header/>
      <About/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
