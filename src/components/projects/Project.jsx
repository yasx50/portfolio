import React from 'react'
import ProjectCard from './Projects'
import msme from '../../assets/msme.png';
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
      demoLink="https://hospital-food-management-system-1.onrender.com/"
      githubLink="https://github.com/yasx50/hospital-food-management-system"
    />
    <ProjectCard
      title="Talk to Titanic"
      description="Predicts MSME loan eligibility using Python, FastAPI, and ML frameworks."
      image={msme}
      category="FinTech"
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