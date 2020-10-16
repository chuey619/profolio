import React, { createRef, useState } from 'react';
const Project = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = React.createRef()
  const onHover = (e) => {
    setIsVisible(true);
    
  };
  const onHoverExit = (e) => {
    setIsVisible(false);
    
  };

  
  return (
    <div
      ref={projectRef}
      onMouseLeave={(e) => onHoverExit(e)}
      onMouseOver={(e) => onHover(e)}
      style={{ backgroundImage: props.image }}
      className="project"
    >
      {isVisible && <div 
      onMouseLeave={(e) => onHoverExit(e)}
      onMouseOver={(e) => onHover(e)}
      className='project-info'>
        <h1 className='project-title'>{props.title}</h1>
        <p className='project-description'>{props.description}</p>
        <div className='project-links'>
          <a className='project-link' href={props.githubLink} target='_blank'>View on Github</a>
          <a className='project-link' href={props.deployedLink} target='_blank'>View deployed version</a>
        </div>
      </div>}
    </div>
      
    
  );
};

export default Project;
