
import React from 'react'

function MakeCards() {
  return (
    <>
    {/* card with no image */}
    <div className='p-20 bg-teal-100'>
        <h3 className='text-teal-500 mb-4 font-bold text-2xl'>1. Card w/no image</h3>
        <div className='bg-white  p-6 rounded-lg shadow-lg shadow-gray-600\'>
            <h2 className='font-bold mb-2 text-2xl'>Card with no image</h2>
            <p className='text-gray-600'>This is my cool new card!</p>
        </div>
    </div>

    {/* card with image */}
    <div className='p-20 bg-purple-100'>
        <h3 className='font-bold text-2xl mb-4 text-purple-400'>Number 2 Card with Image</h3>
        <div className='bg-white rounded-lg shadow-lg shadow-gray-600 md:w-1/2'>
            <img src="https://images.unsplash.com/photo-1726502429134-a9cd092b10e4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-t-lg ' alt="Tokyo Japan" />
            <div className='p-6'>
                <h2 className='font-bold mb-2 text-2xl text-purple-800'>Card with an image</h2>
                <p className='text-gray-700 mb-2'>This is a little bit better of a card!</p>
                <a href="#"className='text-purple-600 underline text-sm hover:text-purple-500'>Read More 👈</a>
            </div>
        </div>
    </div>

    {/* horizontal card  */}

    <div className='p-20 bg-orange-200'>
        <div className='bg-white rounded-lg shadow-xl md:flex text-center md:text-start'>
                <img src="https://images.unsplash.com/photo-1733725071146-5e4157a308da" alt="Fish" className='md:w-1/3 rounded-t-xl md:rounded-l-lg md:rounded-t-none' />
            <div className='p-6 '>
                <h2 className='font-bold text-3xl mb-2 text-orange-700'>Horizontal Card</h2>
                <p className='text-gray-600 text-orange-700'>Look at me go sideways</p>
            </div>
         
        </div>
    </div>

    <div className='bg-emerald-200 p-20 md:bg-gray-300 '>
        <h3 className='text-gray-500 mb-4 font-bold text-2xl'>3. Horizontal and Responsive Card</h3>
        <div className='bg-white rounded-xl shadow-xl shadow-gray-600 md:flex text-center md:text-start'>
            <img src="https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778" alt="" className='md:w-1/3 md:rounded-l-lg rounded-t-xl md:rounded-r-none' />

            <div className='p-6'>
                <h2 className='font-bold md:text-4xl text-3xl text-emerald-600 mb-4'>Horizontal Card</h2>
                <p className='text-emerald-600'>Look at me go sideways</p>
            </div>
        </div>

    </div>

    </>
  )
}

export default MakeCards