import React,{useState} from 'react'

function Grid() {
  return (
    <>
    <div className="grid md:grid-cols-4 gap-2 p-20 bg-green-200 text-green-800">
        <div className="bg-green-100 rounded p-5">card 1</div>
        <div className="bg-green-100 rounded p-5">card 2</div>
        <div className="bg-green-100 rounded p-5">card 3</div>
        <div className="bg-green-100 rounded p-5">card 4</div>
        <div className="bg-green-100 rounded p-5">card 5</div>
        <div className="bg-green-100 rounded p-5">card 6</div>
    </div>

    <div className="grid grid-cols-3 grid-rows-3 gap-3 p-20 bg-lime-300 text-green-800">
        <div className="bg-lime-100 rounded p-5">card 1</div>
        <div className="span-2 row-span-2 bg-lime-100 rounded p-5">card 2</div>
        <div className="bg-lime-100 rounded p-5">card 3</div>
        <div className=" row-span-2 bg-lime-100 rounded p-5">card 4</div>
        <div className="row-span-2 bg-lime-100 rounded p-5">card 5</div>
        <div className="bg-lime-100 rounded p-5">card 6</div>
    </div>

    <div className="grid grid-cols-4 grid-rows-4 gap-3 p-20 bg-orange-200 text-green-800 ">
        <div className='row-start-1 row-span-4 bg-orange-100 rounded p-5'>image</div>
        <div className='flex items-center justify-center col-span-2 row-span-3 bg-orange-100 rounded p-5'>content</div>
        <div className='row-start-1 col-start-4 row-span-4 bg-orange-100 rounded p-5'>something</div>
        <div className='row-start-4 col-start-2 col-span-2 bg-orange-100 rounded p-5'>footer</div>
    </div>

    
    
    </>
  )
}

export default Grid