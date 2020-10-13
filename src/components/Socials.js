import React from 'react';
const Socials = () => {
  return (
    <div className="socials">
      <a
        data-toggle="tooltip"
        data-placement="top"
        title="GitHub"
        target="_blank"
        href="https://www.github.com/chuey619"
      >
        <i className="fab fa-github"></i>
      </a>

      <a
        data-toggle="tooltip"
        data-placement="top"
        title="LinkedIn"
        target="_blank"
        href="https://www.linkedin.com/in/chuey-israel/"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a
        data-toggle="tooltip"
        data-placement="top"
        title="Email me"
        href="mailto: chuey.israel@gmail.com"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

export default Socials;
