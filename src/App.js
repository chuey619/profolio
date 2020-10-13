import React from 'react';
import { Header, Nav, Content, Footer } from './components';
import './App.css';

function App() {
  const contactRef = React.createRef()
  const aboutRef = React.createRef()
  const projectsRef = React.createRef()
  return (
    <div className="main">
      <Header contactRef={contactRef} />
      <Nav contactRef={contactRef} aboutRef={aboutRef} projectsRef={projectsRef}/>
      <Content  aboutRef={aboutRef} projectsRef={projectsRef}/>
      <Footer />
    </div>
  );
}

export default App;
