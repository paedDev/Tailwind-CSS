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
    <div className='p-32 bg-sky-200'>

    </div>



    {/* grouped and button w/icon */}
    <div className='p-32 bg-violet-200'>

    </div>
    
    
    </>
  )
}

export default Buttons