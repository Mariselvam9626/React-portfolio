import React from 'react';
import heropng from '../assets/img.jpg';
import { AiOutlineX, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { SlSocialInstagram } from "react-icons/sl";

const Hero = () => {
  const config = {
    Twitter: 'https://x.com/mari_selva66517',
    Facebook: 'https://www.facebook.com/mari.mathiyalagan/',
    LinkedIn: 'https://www.linkedin.com/in/mariselvam9626/',
    Github: 'https://github.com/Mariselvam9626',
    Instagram: 'https://www.instagram.com/mariselvam57/'
  };

  return (
    <article className='flex flex-col md:flex-row px-5 py-32 bg-gradient-to-r from-sky-500 to-indigo-500 justify-center'>
      <div className='md:w-1/2 flex flex-col'>
        <h1 className='text-white text-6xl font-hero-font'>
          Hii,<br /> I'm <span className='text-black'> Mariselvam</span>
          <p className='text-2xl'>I'm a Junior Software Developer</p>
        </h1>
        <div className='flex py-10'>
          <a href={config.Twitter} className='pr-5 hover:text-white' target="_blank" rel="noopener noreferrer"><AiOutlineX size={40} /></a>
          <a href={config.Facebook} className='pr-5 hover:text-white' target="_blank" rel="noopener noreferrer"><AiOutlineFacebook size={40} /></a>
          <a href={config.LinkedIn} className='pr-5 hover:text-white' target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin size={40} /></a>
          <a href={config.Github} className='pr-5 hover:text-white' target="_blank" rel="noopener noreferrer"><AiOutlineGithub size={40} /></a>
          <a href={config.Instagram} className='pr-5 hover:text-white' target="_blank" rel="noopener noreferrer"><SlSocialInstagram size={40} /></a>
        </div>
      </div>  
      <img className='md:w-1/3 rounded-full h-[450px] border-2 border-black' src={heropng} alt='Mariselvam portrait' />
    </article>
  );
}

export default Hero;
