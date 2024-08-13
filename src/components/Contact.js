import React from 'react';

const Contact = () => {

  const config = {
    email: 'mariselvam1999use@gmail.com',
    phone: ' +91 6380189912'
  }
  return (
    <section id='contact' className='flex  flex-col  bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-32 text-white'>
        
        <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[134px] font-bold'>Contact</h1>
                <p className='pb-5'> If you want to discuss my details, please contact me</p>           
                <p className='py-2'><span className='font-bold'>Email :{config.email}</span></p>
                <p className='py-2'><span className='font-bold'>Phone :{config.phone}</span></p>

        </div>
    </section>
  )
}

export default Contact;