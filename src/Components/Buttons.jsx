import React from 'react'

function Buttons() {
  return (
    <>
    {/* buttons */}
    <div className='p-32 bg-blue-300'>
        <div className='flex justify-center space-x-32'>
        <a href="#"className='bg-red-600 hover:bg-red-500 px-8 py-4 rounded-lg text-red-100 transition duration-300 ease-in shadow-lg shadow-red-400'>Learn More</a>
        <a href="#"className='bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-lg text-orange-200 transition duration-500'>Login in</a>
        <a href="#"className='bg-teal-600 hover:bg-teal-500 text-teal-200 px-8 py-4 rounded-lg transition duration-300 border-b-4 border-teal-700 hover:border-teal-800'>Sign up</a>
        </div>
    </div>

    {/* outline and shadow btn */}
    <div className='p-32 bg-sky-200 flex justify-center text-xl '>
      <div className='space-x-32 '>
        <a href="#" className='border-sky-800 border rounded py-4 px-8 text-sky-800 hover:border-sky-500 transition duration-500 font-bold'>Do It</a>
        <a href="#" className='py-4 px-8 rounded-full shadow-md hover:shadow-xl transition duration-500 bg-white text-sky-600'>Don`t Do It</a>
        
        <button className='py-4 px-8 border border-black rounded-xl transition duration-500 transform hover:-translate-y-4'>
        click me
        </button>
      </div>
    </div>

    {/* grouped and button w/icon */}
    <div className='p-32 bg-violet-200 space-x-8 text-xl flex justify-center '>
      <div className='flex text-center'>
          <a href="# " className='bg-violet-600 hover:bg-violet-700 text-purple-200 py-2 w-16 rounded-l-xl transition duration-300 flex items-center justify-center'>👈</a>
          <a href="# " className='bg-violet-600 hover:bg-violet-700 text-purple-200 py-2 w-16 transition duration-300 flex items-center justify-center'>1</a>
          <a href="# " className='bg-violet-600 hover:bg-violet-700 text-purple-200 py-2 w-16 transition duration-300 flex items-center justify-center'>2</a>
          <a href="# " className='bg-violet-600 hover:bg-violet-700 text-purple-200 py-2 w-16 rounded-r-xl transition duration-300 flex items-center justify-center ' >👉</a>
      </div>

          <a href="#" className='bg-indigo-400 pl-6 rounded-full flex items-center text-indigo-700 hover:bg-indigo-300 '>
            <span className='mr-3 text-xl '>Click this</span>
            <span className='inline-block bg-indigo-500 h-16 w-16 rounded-full flex items-center justify-center hover:bg-indigo-700 animate-spin'>🤘</span>
          </a>


    </div>
    
    
    </>
  )
}

export default Buttons