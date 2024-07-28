import React from 'react'
function Account() {
    let data= JSON.parse(localStorage.getItem("data"));
    console.log(data)
  return (
    <div className='div-13'>
        <div className='div-11'><img src={data.area} alt="" /></div>
        <div className='div-12'>
         <div><p className='p'>Name:</p><p className='p2'>{data.name}</p></div>
         <div><p className='p'>Tel:</p><p className='p2'>{data.phone}</p></div>
         <div><p className='p'>Email:</p><p className='p2'>{data.email}</p></div>
         <div><p className='p'>Data:</p><p className='p2'>{data.date}</p></div>
         <div><p className='p'>Time:</p><p className='p2'>{data.time}</p></div>
         <div><p className='p'>Malumod:</p><p className='p2'>{data.postCode}</p></div>
        </div>
    </div>
  )
}

export default Account