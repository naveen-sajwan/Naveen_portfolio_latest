import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="inner_wrap" >
                <ul className='list'>
                    <li className="list_item">
                        <a href="#Home_section">Home</a>
                    </li>
                    <li className="list_item">
                        <a href="#MyProject_section">Projects</a>
                    </li>
                    <li className="list_item">
                        <a href="#Contact_section">Contact</a>
                    </li>
                </ul>
        </div>
    </>
  )
}

export default Navbar