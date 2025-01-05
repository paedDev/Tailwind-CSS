
function IntroP2() {
  return (
    <>
    <div className="py-20 min-h-screen bg-gray-200">

        <div className=" container mx-auto relative">
            <div className="p-10 bg-white rounded-lg shadow-lg">
                {/* Absolute brand top right */}

                <div className="w-4 h-4 rounded-full bg-red-400 absolute top-0 left-0 transform -translate-x-2 -translate-y-2"></div>
                <div className="w-4 h-4 rounded-full bg-red-400 absolute top-0 left-0 transform -translate-x-4 -translate-y-4 animate-ping "></div>
                <div className="absolute top-0 right-0 bg-red-500 text-red-200 px-4 py-1 rounded-md transform translate-x-2 -translate-y-2 text-xs animate-pulse transition duration-300">Brand New</div>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti facere reiciendis mollitia sapiente labore cum saepe numquam tempore consequatur? Nemo accusantium quis ipsa illo rerum consequuntur, repellat beatae quidem.</p>
            </div>
       </div>
    </div>
    
    <div className="min-h-screen bg-blue-200 p-20">
        <h2 className="text-6xl text-black md:text-red-600 lg:text-yellow-500 xl:text-white">Mobile First</h2>
        <h2 className="text-3xl md:text-4xl lg:text-6xl ">Different Sizes per Devices</h2>


        <div className="md:flex md:space-x-8 ">
            <div className="md:flex-1 p-10 bg-white mt-10 md:bg-orange-600 sm:bg-red-600">On Mobile we stack</div>
            <div className="md:flex-1 p-10 bg-white mt-10 md:bg-orange-600 sm:bg-red-600 ">On desktop, we are side by side</div>
        </div>
    </div>
    
    {/* stacknig vs side by side */}

    
    
    </>
  )
}

export default IntroP2;