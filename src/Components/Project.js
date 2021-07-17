import React from 'react'
import {ProjectData} from './Projects'
import ProjectCard from './Project-Card'
import Separator from './Separator'
import './Project.css'
function Projects() {
    const data = ProjectData
    return (
        <div className="projects">
            <Separator/>
            <h3 className="section-title">Projects</h3>
            <div>
              {data.map((project)=>{
                  return <ProjectCard project={project}   />
              })}
            </div>
        </div>
    )
}

export default Projects
