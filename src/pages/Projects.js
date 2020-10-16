import React from 'react'
import {Project} from '../components'
const Projects = () => {
    const projects = 
    [
      {
        title:'Where To Watch',
        description:'A full stack app using the PERN stack that allows users to find movies and shows to watch on the streaming services they are subscribed to. This project taught me a lot about working with a team and git work flow.',
        image:'url(./images/wtwImage.png)',
        githubLink:'https://github.com/chuey619/whatShouldIWatch',
        deployedLink:'https://dashboard.heroku.com/apps/serene-plateau-44893'
      }, 
      { 
        title:'Project Manager',
        description:'A full stack app using the PERN stack that allows users to communicate with their team and keep track of their projects. I used socket.io to allow for real time chat and updating of the project boards.',
        image:`url(./images/pmImage.png)`,
        githubLink:"https://github.com/chuey619/project-manager",
        deployedLink:'https://ci-project-manager.herokuapp.com/home'
      },
      {
        title:'SmashTracker',
        description:'A full stack app using express and ejs. This app allows users to track their smash history against other uers in Super Smash Bros Ultimate',
        image:'url(./images/stImage.png)',
        githubLink:'https://github.com/chuey619/smashTracker',
        deployedLink:'https://agile-cliffs-01660.herokuapp.com/'
      },
      {
        title: 'Pokemon Battles',
        description:  'A turned based pokemon game that uses vanilla JS and DOM manipulation. Battle your way through the different areas and level up your pokemon to win!',
        image: 'url(./images/pokeImage.png)',
        githubLink: 'https://github.com/chuey619/pokemon',
        deployedLink: 'https://chuey619.github.io/pokemon/'
      }
    ]
    return (
        <div className='projects-main animate__animated animate__backInDown'>
            <h1>My Work<span className='punctuation'>.</span></h1>
            <div className='projects'>
            {projects.map((project, i) => <Project key={i} title={project.title} description={project.description} image={project.image} githubLink={project.githubLink} deployedLink={project.deployedLink}/>)}
            </div>
            
        </div>
    )
}

export default Projects