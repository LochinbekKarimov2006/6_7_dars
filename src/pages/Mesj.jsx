import React, { useState } from 'react'
let [malumod,setMalumod]=useState(false)
function Mesj() {
  return (
    <div>
    <div className="collapse bg-base-200 max-w-[1300px] mx-auto">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
  {malumod&&<div></div>}
</div>

    </div>
  )
}

export default Mesj