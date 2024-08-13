import React from 'react';
import websiteImg1 from '../assets/Todolist.png'; 
import websiteImg2 from '../assets/crudImg.png'; 
import websiteImg3 from '../assets/website-blog.png'; 

const Project = () => {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: 'Todo-List - website built in React.js',
        link: 'https://github.com/Mariselvam9626',
      },
      {
        image: websiteImg2,
        description: 'CRUD Application - website built in React.js',
        link: 'https://github.com/Mariselvam9626',
      },
      {
        image: websiteImg3,
        description: 'Colorshower - website built in React.js',
        link: 'https://mariselvam9626.github.io/ColorShower/',
      },
    ],
  };

  return (
    <section id='project' className='flex flex-col py-20 px-5 justify-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>
      <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>
          <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[170px] font-bold'>Projects</h1>
          <p>Here are some projects I've worked on:</p>
        </div>
      </div>
      <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
          {config.projects.map((project, index) => (
            <a key={index} href={project.link} target='_blank' rel='noreferrer'>
              <div className='relative'>
                <img className='h-[200px] w-[500px]' src={project.image} alt={project.description} />
                <div className='project-desc'>
                  <p className='text-center px-5 py-5'>{project.description}</p>
                  <div className='flex justify-center'>
                    <a className='btn' target='_blank' rel='noreferrer' href={project.link}>View Project</a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
