import React from 'react'

function Hoome() {
  return (
    <div>
        <div className='div-5'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, itaque.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nobis soluta, delectus corporis debitis molestias non adipisci necessitatibus cum quisquam, quasi architecto voluptate facilis rerum perspiciatis iure eaque atque ex fugit minus quod eos. Laudantium ratione obcaecati rem repellendus distinctio fugiat illum iure aperiam dolorem, quasi, possimus perferendis quod porro.</p>
        </div>
       <div className="flex flex-wrap mt-[8%]">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div className="text-4xl font-bold">
            Plant<span className="text-green-700">.</span>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">Find your <span className="text-green-700">greeny</span> stuff for your room</h1>
            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
            <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
          </div>
        </header>
      </div>
    </div>
    <img src="https://picsum.photos/id/353/200/300" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12 "/>
  </div>
    </div>
  )
}

export default Hoome