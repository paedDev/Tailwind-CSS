import React from 'react'

function Display() {
  return (
    <>
    {/* centering */}
        <div className='flex items-center justify-center bg-green-700 h-64 sm:bg-lime-200 md:bg-lime-600'>
            <h2 className="text-4xl text-lime-200">Centered!</h2>
        </div>

    {/* navigation */}
        <div className="bg-gray-300 p-10 flex justify-between items-center">
            <div className='text-4xl font-bold'>
                <span className='text-red-500'>Lo</span>
                <span className='text-black'>go</span>
            </div>
            <div className='flex justify-between'>
                <ul className='flex space-x-8 text-2xl'>
                    <li><a href="#" className='hover:text-red-500'>Home</a></li>
                    <li><a href="#" className='hover:text-red-500'>About</a></li>
                    <li><a href="#" className='hover:text-red-500'>Shop</a></li>
                   
                </ul>
            </div>
            
        </div>

    {/* creating a columns section */}
    <div className="bg-white-500 p-10 md:flex md:space-x-8 space-y-4 md:space-y-0">

    
        <div className="bg-red-500 p-2 flex-1">hello</div>
        <div className="bg-pink-500 p-2 flex-1">hello</div>
        <div className="bg-blue-500 p-2 flex-2">hello</div>
    </div>
    {/* sidebar */}
    <div className="bg-gray-300 h-64 text-center mb-10">
        <div className='md:flex items-stretch h-full'>
            <div className='md:w-1/4 bg-orange-500 p-10 hidden md:block '>sidebar</div>
            <div className='md:flex-1 bg-teal-500 p-10'>content</div>
        </div>
    </div>
    

    <div className='bg-red-700 h-64 text-center mb-10'>
        <div className='md:flex items-stretch h-full'>
            <div className='md:w-1/4 bg-pink-600 p-10'>sidebar</div>
            <div className='md:flex-1 bg-orange-600 p-10'>content</div>
        </div>
    </div>



    <div className="bg-gray-300 h-24 md:bg-red-200 flex items-center justify-between p-10">
        <div className='font-bold text-4xl'>
            <span className='text-red-600'>Lo</span>
            <span className='text-black'>Go</span>
        </div>
        <div className='p-5 relative'>
            <ul className='flex space-x-6 text-xl '>
                <li><a href="" className='hover:text-red-600 bg-gray-200 p-4 rounded-xl'>Home</a></li>
                <li><a href="" className='hover:text-red-600'>About</a></li>
                <li><a href="" className='hover:text-red-600'>Contact Us</a></li>
            </ul>

            <div className='w-4 h-4 absolute bg-red-500 top-0 right-45 rounded-full tranform -translate-x-1.5 -translate-y-1'>
            
            </div>
        </div>

    
       
      
    </div>

    {/* bg-white-500 p-10 md:flex md:space-x-8 space-y-4 md:space-y-0 */}
    <div className='p-10 md:flex md:space-x-8 md:text-center md:space-y-0 space-y-4 '>
        <div className='flex-2 bg-red-600 p-5 rounded-xl text-white' >hello</div>
        <div className='flex-1 bg-blue-600 p-5 rounded-xl text-white' >hello</div>
        <div className='flex-1 bg-pink-600 p-5 rounded-xl text-white' >hello</div>
    </div>
    </>
  )

  
}

export default Display