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

        <div className='bg-purple-300 min-h-screen py-32 px-10'>
           
                <form action="" className='bg-white w-2/3 mx-auto p-10 rounded '>
                    <div className='mb-2 flex items-center'>
                        <label htmlFor="name" className='font-bold text-gray-500 mr-6 inline-block text-right w-20'>Name</label>
                        <input type="text" id='name '  placeholder='Jn on a code'  className='placeholder-gray-400 border-b-2  py-3 flex-1 outline-none focus:border-green-300 border-gray-300'/>
                    </div>
                    <div className='mb-4 flex items-center'>
                        <label htmlFor="facebook" className='font-bold text-gray-500 mr-6 inline-block text-right w-20'>Facebook</label>
                        <input type="text" id='Facebook' placeholder='@jnpaed30z' className='placeholder-gray-400 border-b-2 py-3 flex-1 outline-none  focus:border-green-300  border-gray-300'/>
                    </div>

                    <div className='flex justify-end '>
                        <button className='px-8 py-3 bg-green-500 text-white font-bold rounded-xl'>
                            Submit
                        </button>
                    </div>
                   
                </form>
           
        </div>

        <div className='bg-violet-200 min-h-screen py-32 px-10 text-xl'>
                <form action="" className='lg:w-1/2 md:w-3/4 mx-auto'>
                <div className='shadow-xl'>
                    <div className='flex items-center bg-violet-300 rounded-t-lg border-violet-400 border-b '>
                            <label htmlFor="name" className='w-20 text-right mr-8 font-bold text-purple-400'>Name</label>
                            <input type="text" id='name' placeholder='Jn on code' className='flex-1 p-4 pl-0 bg-transparent outline-none placeholder-purple-200 text-white' />
                        </div>
                    <div className='flex items-center bg-violet-300 rounded-b-lg mb-4'>
                        <label htmlFor="twitter"className='w-20 text-right mr-8 font-bold text-purple-400'>Twitter</label>
                        <input type="text" id='twitter' placeholder='@jnpaed30'className='flex-1 p-4 pl-0 bg-transparent outline-none placeholder-purple-200 text-white' />
                    </div>
                </div>
                    <div className=''>
                    <button className='block w-full bg-pink-300 p-2 rounded-lg text-white'>Submit</button>
                    </div>
                
                </form>
        </div>











    </>
  )
}

export default Form