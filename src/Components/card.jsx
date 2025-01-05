
function Card() {


    return (
      <>
        <div className=" flex m-20 items-center border border-gray-200 p-4 shadow">
          <img src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width={130} className="rounded-lg mr-4 "/>
          <div className="text-gray-700">
            <h2 className="font-bold text-2xl text-gray-900">Erlin Lindfordaa</h2>
            <div className="text-sm">Product Engineer</div>
            <div className="text-sm">Erinlindford@example.com</div>
            <div className="text-sm">(555) 765-4321</div>
          </div>
        </div>
      </>
    )
  }
  
  export default Card
  