import React from 'react'
import { SkillsData } from './SkillData'
import './Skill-Card.css'
function  SkillCard({skill}) {
    return (
        <div className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <label className="skill-name">{skill.name}</label>
        </div>
    )
}

export default SkillCard
