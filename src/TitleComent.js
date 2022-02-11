import React from 'react'
import "./titlecoment.css"

function TitleComent({title,text,titlemini,textmini}) {
    return (
        <div className='containe titlestyle'>
                        <div className='title container'>
                <h2>
                    {title}
                    </h2>
                <p>
                    {text}
                </p>
            </div>
                        <div className='title container'>
                <h2 id='hmini' >
                    {titlemini}
                    </h2>
                <p>
                    {textmini}
                </p>
            </div>

        </div>
    )
}

export default TitleComent
