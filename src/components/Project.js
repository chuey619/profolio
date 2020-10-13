import React, { useState } from 'react';
const Project = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const onHover = (e) => {
    setIsVisible(true);
  };
  const onHoverExit = (e) => {
    setIsVisible(false);
  };
  return (
    <div
      onMouseLeave={(e) => onHoverExit(e)}
      onMouseOver={(e) => onHover(e)}
      className="project"
    >
      <div className="project-image" style={{ backgroundImage: props.image }}>
        <div
          style={
            isVisible ? { visibility: 'visible' } : { visibility: 'hidden' }
          }
          className="links"
        >
          <a className="project-link" target="_blank" href={props.githubLink}>
            GitHub
          </a>
          <a className="project-link" target="_blank" href={props.deployedLink}>
            Deployed App
          </a>
        </div>
      </div>
      <div className="project-meta">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Project;
