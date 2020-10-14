import React from 'react';
const Nav = (props) => {
  const scrollInto = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <ul className="nav">
      <li  onClick={()=> scrollInto(props.aboutRef)} className="nav-item">About</li>
      <li onClick={()=> scrollInto(props.projectsRef)} className="nav-item">Projects</li>
      <li onClick={()=> scrollInto(props.contactRef)} className="nav-item">Contact</li>
      <li className='nav-item'><a target='_blank' href='https://drive.google.com/file/d/1gGCBmfhvS_De4MmEBC217k2Z1hm9Z4KI/view?usp=sharing'>Resume</a></li>
    </ul>
  );
};

export default Nav;
