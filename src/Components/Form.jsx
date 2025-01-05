import React from 'react'

function Form() {
  return (
    <>
    <div className='bg-blue-200 min-h-screen py-32 px-10'>
        <div className='bg-white p-10 rounded-lg shadow-xl md:w-3/4 mx-auto lg:w-1/2 '>
            <form action="">
                <div className='mb-5'>
                    <label htmlFor="name" className='block mb-2 font-bold text-gray-600'>Name </label>
                    <input type="text" id='name'placeholder='Paed on Code' className='border border-gray-300 shadow p-3 w-full rounded-lg'/>
                </div>
                <div className='mb-10'> 
                    <label htmlFor="facebook " className='block mb-2 font-bold text-gray-600'>Facebook </label>
                    <input type="text" id='Facebook'placeholder='@jnpaed30' className='border border-red-300 shadow p-3 w-full rounded-lg'/>
                    <p className='text-sm text-red-400 mt-2'>Facebook username is required</p>
                </div>

                <button className='block w-full bg-blue-500 text-white font-bold p-4 rounded-lg'>
                    Submit
                </button>

            </form>
        </div>
    </div>
    <div className='bg-green-200 min-h-screen py-32 px-10'>
    
            <div className='bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded'>
            
                <form action="" className=''>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor="name" className='text-gray-400 font-bold mr-6 w-20 inline-block text-right'>Name</label>
                        <input type="text" id='name'placeholder='Paed on Code' className='border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400 '/>
                    </div>

                    <div className='mb-4 flex items-center'>
                        <label htmlFor="facebook" className='text-gray-400  font-bold  mr-6 w-20 inline-block text-right'>Facebook</label>
                        <input type="text" id='facebook' placeholder='@jnpaed30'className='border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400'/>
                    </div>
                    <div className='flex justify-end'>
                    <button className='py-3 px-8 bg-green-500 text-white font-bold rounded '>Submit</button>
                    </div>
                  
                   
                   
                </form>
            </div>
        </div>
    </>
  )
}

export default Form