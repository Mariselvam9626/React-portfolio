import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='flex justify-between px-6 py-5 p-2 bg-gradient-to-r from-sky-500 to-indigo-500'>
      <a className='font-bold text-black' href="/">Portfolio</a>
      
      <nav className='hidden md:block'>
        <ul className='flex text-black'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {toggleMenu && (
        <nav className='block md:hidden'>
          <ul 
            onClick={() => setToggleMenu(false)} 
            className='flex flex-col text-white mobile-nav'
          >
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      <button 
        onClick={() => setToggleMenu(!toggleMenu)}  
        className='block md:hidden'
      >
        <Bars3Icon className='text-white h-5' />
      </button>
    </header>
  );
}

export default Header;
