import React from 'react';
import { About, Projects, Stack } from './index';

const Content = (props) => {
  return (
    <div className="content">
      <Stack />
      <About aboutRef={props.aboutRef}/>
      <Projects projectsRef={props.projectsRef}/>
    </div>
  );
};

export default Content;
