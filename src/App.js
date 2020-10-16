import React, {useState} from 'react';
import { Nav } from './components';
import {Landing, Contact, About, Projects} from './pages'
import './App.css';

function App() {
 
  const [currentPage, setCurrentPage] = useState('Landing')
  
  return (
    <div className="main">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className='content'>
      {currentPage === 'Landing' ? <Landing /> : currentPage === 'About' ? <About /> : currentPage === 'Projects' ? <Projects /> : <Contact />}
      </div>
      
    </div>
  );
}

export default App;
