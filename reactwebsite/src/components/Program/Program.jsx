import React from 'react'
import "./Program.css"
import  program_1 from "../../assets/program-1.jpg"
import Program_2 from "../../assets/program2.png"
import Program_3 from "../../assets/program-3.png"

function Program() {
  return (
    <div className="programs">
      
      
       <div className="program">
            <img src={program_1} alt=""  />
            <p className='caption'>post graduate</p>
        </div>
        
        <div className="program">
            <img src={Program_2} alt="" />
            
            <p className='caption'>under graduate</p>
        </div>
        <div className="program">
            <img src={Program_3} alt="" />
            <p className='caption'>master graduate</p>
        </div>
       

    </div>
  )
}

export default Program