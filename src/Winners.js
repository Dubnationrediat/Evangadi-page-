import React from 'react'
import "./winners.css"
function Winners({Name,Adress}) {
    return (
        <div className=' namead container'>
           
            <div className=' nameaddres  containe  '>
            <div className='name'>{Name}</div>
            <div className='adress'>{Adress}</div>
            </div>
        </div>
    )
}

export default Winners
