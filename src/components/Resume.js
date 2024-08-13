import React from 'react';
import ResumeImg from '../assets/resume.jpg';
import resume from '../assets/resume.pdf';

const Resume = () => {




  return (
    <section id='resume' className='flex  flex-col md:flex-row bg-gradient-to-r from-sky-500 to-indigo-500 px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} alt="img" />
        </div>
        <div className='w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>You can view my resume   <a className='btn' href={resume} download="resume">Download</a></p>
            </div>
        </div>
    </section>
  )
}

export default Resume;