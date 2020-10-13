import React from 'react';
import { Socials } from './index';
const Header = (props) => {
  return (
    <div ref={props.contactRef} className="header">
      <h1>Chuey Israel</h1>
      <h4>Software Developer</h4>
      <Socials />
    </div>
  );
};

export default Header;
