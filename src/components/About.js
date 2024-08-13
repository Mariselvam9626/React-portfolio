import React from 'react';
import about from '../assets/about.png';

const About = () => {
  const config ={
    line1:'Hi My name is Mariselvam . I am a Frontend Developer',
    line2:'I am proficient in Frontend skills like React,Html, Css,Tailwind css-Bootsrtap..',
    line3:'In backend I know python MySql..'
  }


  return (
    <section className='flex  flex-col md:flex-row bg-gradient-to-r from-sky-500 to-indigo-500 px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={about} alt="img" />
        </div>
        <div className='w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
           
        </div>
    </section>
  )
}

export default About;
