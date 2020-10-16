import React from 'react'
const NavItems = (props) => {
    const yellow = '#f5cb5c'
    const offWhite = '#cfdbd5'
    const changeColorOnHover = (e) => {
      e.target.style.color = yellow
    }
    const changeColorOnMouseLeave = (e) => {
      if (e.target.id !== props.currentPage) {
        e.target.style.color = offWhite
      }
}
return (
    <div className="nav-pages">
    <i data-toggle="tooltip"
    data-placement="top"
    title="Home" id='Landing' onMouseOver={changeColorOnHover} onMouseLeave={changeColorOnMouseLeave} style={props.currentPage === 'Landing' ? {color: yellow} : {color: offWhite}} onClick={()=> props.setCurrentPage('Landing')}  className="fas fa-home nav-item"></i>
    <i data-toggle="tooltip"
    data-placement="top"
    title="About" id='About' onMouseOver={changeColorOnHover} onMouseLeave={changeColorOnMouseLeave}  style={props.currentPage === 'About' ? {color: yellow} : {color: offWhite}} onClick={()=> props.setCurrentPage('About')} className="fas fa-question nav-item"></i>
    <i data-toggle="tooltip"
    data-placement="top"
    title="My Work" id='Projects' onMouseOver={changeColorOnHover} onMouseLeave={changeColorOnMouseLeave}  style={props.currentPage === 'Projects' ? {color: yellow} : {color: offWhite}} onClick={()=> props.setCurrentPage('Projects')} className="fas fa-code nav-item"></i>
    
    <a data-toggle="tooltip"
    data-placement="top"
    title="Resume" className='nav-item'target='_blank' href='https://drive.google.com/file/d/1gGCBmfhvS_De4MmEBC217k2Z1hm9Z4KI/view?usp=sharing'><i className="fas fa-file-alt"></i></a>
  </div>
)
}

export default NavItems