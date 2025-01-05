


function Concepts () {

    return (
        <>
        <div className="h-screen">
            
            {/* spacing */}
            <div className="p-20 bg-gray-200 m-4 rounded-xl">
                <h2 className="mb-4 text-4xl tracking-wider font-bold">Spacing Section</h2>
                <p className="mb-4 text-gray-600 text-xl">Tailwinds helps us space things out with margin and padding</p>

                <button className="m-4 px-6 py-3 bg-gray-700 rounded-xl text-white hover:scale-105 transition duration-500 hover:bg-gray-500 shadow-lg shadow-gray-500">Learn More</button>
                <button className="m-4 py-3 px-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-orange-200 rounded-xl hover:scale-105 transition duration-500 border border-gray-400 hover:border-orange-300 shadow-lg shadow-orange-50">Sign Up</button>
               
            </div>

            {/* box properties (bg,borders,rounding and shadows) */}
            <div className="p-20 bg-gradient-to-t from-purple-400 to-pink-700 m-4 rounded-lg border-4 border-black ">
                <h2 className="mb-4 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-800 hover:translate-x-8 transition duration-500 text-center">Box Properties</h2>
                <div className="p-10 bg-purple-400 rounded-lg 
                shadow-lg shadow-purple-700 text-purple-700 text-center hover:-translate-y-8 transition duration-500">I am a box</div>

{/* hover:scale-105 transition duration-300 ease-in-out */}
            </div>
             
            <div className="py-20 px-10 bg-orange-300">
            {/* sizing and numbering */}
                <button className="m-4 p-4 bg-orange-400 text-orange-300 rounded w-12">click me</button>
                <button className="m-4 p-4 bg-orange-400 text-orange-300 rounded w-8">click me</button>
                <button className="m-4 p-4 bg-orange-400 text-orange-300 rounded w-20">click me</button>
                <button className="m-4 p-4 bg-orange-400 text-orange-300 rounded w-32">click me</button>
                <button className="m-4 p-4 bg-orange-400 text-orange-300 rounded w-48 h-48 rounded-full">click me</button>
            </div>


            {/* typography */}
            <div className="p-20 border-2 border-black m-4 text-gray-800 leading-relaxed text-lg">
                <h2 className="mb-2 text-4xl text-gray-700 font-bold tracking-wider">Learning Tailwind is Fun!</h2>
                <h3 className="mb-8 text-2xl text-blue-500">More fun that i expected!</h3>

                <p className="mb-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti temporibus iure fugiat distinctio laudantium consequatur fugit, nobis assumenda reiciendis provident incidunt possimus inventore et illo expedita sed voluptate eaque!</p>
                <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam, dolores, necessitatibus fugit nisi doloremque iure magnam sint doloribus vel distinctio aliquam repellat corrupti! In architecto delectus dolor hic sit.</p>
                <p className="mb-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, esse veniam placeat id vitae inventore ex officia, labore doloribus nihil fuga laudantium voluptates quasi! Quibusdam quia magnam ipsa, iste est perferendis. Quisquam expedita praesentium libero esse, iusto officiis ratione asperiores, tempore ducimus quaerat impedit, maiores inventore sit nisi eligendi a!</p>
            </div>

            {/* colors */}
            <div className="p-20 bg-gray-800 space-y-3 ">
                <div className="p-4 rounded-lg bg-rose-100 hover:bg-red-900 hover:text-red-100">i am a box</div>
                <div className="p-4 rounded-lg bg-rose-200 hover:bg-red-900 hover:text-red-100">i am a box</div> 
                <div className="p-4 rounded-lg bg-rose-300 hover:bg-red-900 hover:text-red-100">i am a box</div>
                <div className="p-4 rounded-lg bg-rose-400 hover:bg-red-900 hover:text-red-100">i am a box</div>
                <div className="p-4 rounded-lg bg-rose-500 hover:bg-red-900 hover:text-red-100">i am a box</div>
                <div className="p-4 rounded-lg bg-rose-600 hover:bg-red-900 hover:text-red-100">i am a box</div>
                <div className="p-4 rounded-lg bg-rose-700 hover:bg-red-900 hover:text-red-100">i am a box</div>
                <div className="p-4 rounded-lg bg-rose-800 hover:bg-red-900 hover:text-red-100">i am a box</div>
                <div className="p-4 rounded-lg bg-rose-900 hover:bg-red-900 hover:text-red-100 text-red-200">i am a box</div>
                <div className="p-4 rounded-lg bg-teal-900 text-teal-100 border border-teal-700">i am a box</div>
            </div>

            {/* psuedo classes(hover,focus and active) */}
                 {/* transition and transform */}
            <div>
                <div className="p-20 m-4 border border-red-900 rounded-lg space-y-3 ">
                    <div className="p-4 bg-red-900 text-red-200 rounded-lg text-center  hover:odd:bg-blue-600 hover:text-black transition duration-300 ease-out ">im a box</div>
                    <div className="p-4 bg-red-900 text-red-200 rounded-lg text-center hover:even:bg-pink-800 hover:text-pink-200 hover:rotate-180 transition duration-500">im a box</div> 
                    <div className="p-4 bg-red-900 text-red-200 rounded-lg text-center hover:odd:bg-pink-700 hover:text-black hover:scale-105 transition duration-300 ease-in-out ">im a box</div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-blue-200 to-red-200">
               <h1 className="p-4 m-4 text-6xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800 rounded-xl ">Whoa Gradients!</h1>

               <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-800 p-4 rounded-full font-bold ">Movie</h1>
            </div>
        </div>
        </>
    ) 
}

export default Concepts