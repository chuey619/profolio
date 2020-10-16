import React, {useState} from 'react';
import {Socials, NavItems} from './index'
const Nav = (props) => {
  return (
    <div className='nav-container'>
     <NavItems currentPage={props.currentPage} setCurrentPage={props.setCurrentPage}/>
     <Socials />
    </div>
  );
};

export default Nav;
