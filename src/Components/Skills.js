import React from 'react'
import './Skills.css'
import { SkillsData } from './SkillData'
import SkillCard from './Skill-Card'
function Skills() {
    const data = SkillsData
    return (
        <div className="skills" id="skills">
        
           <h2 className="section-title">Skills</h2>
           <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                           <label className="skills-section-title">{item.type}</label>
                           <div className="skills-list">
                            {item.list.map((skill)=>{
                                return(
                                  <SkillCard skill={skill}/>
                            )
                            })}
                           </div>
                        </div>
                    )
                })}
           </div>
        </div>
    )
}

export default Skills
