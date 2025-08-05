import React from 'react'
import ProjectCard from './Projects'
import hospital from '../../assets/hospital.png';
import msme from '../../assets/msme.png';
import titanic from '../../assets/titanic.png';

import {
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiFastapi,
  SiPytorch,
} from 'react-icons/si';
const Project = () => {
  return (
   <><div className='bg-black '>
    
   <div className="w-20 ml-10 h-10 bg-successGreen"></div>

   <div className=''><ProjectCard
      title="ML Credit Scoring"
      description="Predicts MSME loan eligibility using Python, FastAPI, and ML frameworks."
      image={msme}
      category="FinTech"
      techIcons={[<FaReact />, <FaNodeJs />, <SiMongodb />, ]}
      demoLink="https://ai-based-credit-scoring-agent-for-msmes-1.onrender.com/"
      githubLink="https://github.com/yasx50/AI-based-Credit-Scoring-Agent-for-MSMEs"
    />

    <ProjectCard
      title="Talk To Titanic"
      description="A goal-driven AI agent for Titanic exploration."
      image={titanic}
      category="Agentic AI"
      techIcons={[<FaReact />, <FaNodeJs />, <SiMongodb />, ]}
      demoLink="https://tailortalk.streamlit.app/"
      githubLink="https://github.com/yasx50/tailortalk"
    />


    <ProjectCard
      title="Hospital Management System	"
      description="Our app is a hospital management system to handle patients, doctors, and billing."
      image={hospital}
      category="HealthTech"
      techIcons={[<FaReact />, <FaNodeJs />, <SiMongodb />, ]}
      demoLink="https://hospital-food-management-system-1.onrender.com/"
      githubLink="https://github.com/yasx50/hospital-food-management-system"
    />
    
    </div>
   </div>
   </>
  )
}

export default Project