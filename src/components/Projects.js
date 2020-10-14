import React from 'react';
import { Project } from './index';

const Projects = (props) => {
  
  const pmDescription =
    'A full stack app using the PERN stack that allows users to communicate with their team and keep track of their projects. I used socket.io to allow for real time chat and updating of the project boards.';
  const wtwDescription = 'A full stack app using the PERN stack that allows users to find movies and shows to watch on the streaming services they are subscribed to. This project taught me a lot about working with a team and git work flow.'
  const stDescription= 'A full stack app using express and ejs. This app allows users to track their smash history against other uers in Super Smash Bros Ultimate'
  const pokeDescription= 'A turned based pokemon game that uses vanilla JS and DOM manipulation. Battle your way through the different areas and level up your pokemon to win!'
  return (
    <div ref={props.projectsRef} className="projects-main">
      <h1>Projects</h1>
      <div className="projects">
        <Project
          title={'Project Manager'}
          description={pmDescription}
          image={`url(./images/pmImage.png)`}
          githubLink="https://github.com/chuey619/project-manager"
          deployedLink={'https://ci-project-manager.herokuapp.com/home'}
        />
        <Project title='Where To Watch'
        description={wtwDescription}
        image={'url(./images/wtwImage.png)'}
        githubLink='https://github.com/chuey619/whatShouldIWatch'
        deployedLink='https://dashboard.heroku.com/apps/serene-plateau-44893'
         />
        <Project title='SmashTracker' 
        description={stDescription}
        image='url(./images/stImage.png)'
        githubLink='https://github.com/chuey619/smashTracker'
        deployedLink='https://agile-cliffs-01660.herokuapp.com/'/>
        
        <Project title='Pokemon Battles'
        description= {pokeDescription}
        image='url(./images/pokeImage.png)'
        githubLink='https://github.com/chuey619/pokemon'
        deployedLink='https://chuey619.github.io/pokemon/'/>
      </div>
    </div>
  );
};

export default Projects;
