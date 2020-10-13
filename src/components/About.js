import React from 'react';
const About = (props) => {
  return (
    <div ref={props.aboutRef} className="about">
      <h1>About</h1>
      <p className="about-text">
        Hi, my name is Chuey Israel and I build websites and apps. I have a
        passion for building apps from scratch with an emphasis on user
        friendliness. I am a graduate of General Assembly's 500+ hour software
        engineering immersive course and am eager to get into the workforce.
      </p>
    </div>
  );
};

export default About;
