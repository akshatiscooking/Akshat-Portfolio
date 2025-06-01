import React from 'react'
import skills from "../skills.json"

const Skills = () => {
  return (
    <>
    <div className='w-full text-sky-500 text-4xl font-bold flex items-center mb-5 justify-center top-5'>
        SKILLS
    </div>
    <div id='card-container' className='w-full flex justify-center flex-col items-center'>
      <div className='grid grid-cols-3 gap-[20px] top-10'>
        {skills.map((skill) =>(
          <div id='card' className='bg-white rounded-[8px] shadow-md p-5 flex flex-col w-[300px] h-[300px] items-center justify-between hover:scale-110' key={skill.id}>
            <span className='text-sky-500 text-xl font-semibold'>
              {skill.title}
            </span>
            <span className='rounded-[50%] w-[40%] h-[40%] bg-[rgba(0,0,0,.1)] flex items-center justify-center'>
              <img src={skill.photo} alt="" key={skill.id} className='w-[60%] h-[60%]'/>
            </span>
            <span className='text-[13px] text-[#DF73FF] font-semibold flex justify-center'>
              {skill.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Skills;
