import React from 'react'
import "./academy.css"
import TitleComent from './TitleComent'

function Academy() {
    return (
        <div className='container academy'>
            <TitleComent title="Evangadi Academy" text="Evangadi Boot Camp is designed to help starters who are just joining the technology field. It aims in providing the necessary skill trainings and support to help students become technology professionals." />

        <h2 className='hh'>Next class will start on Jan10<sup>th</sup>, 2022 </h2>
        <h2 className='hh'>Please read below for full information about the class.</h2>
            <TitleComent titlemini="
." textmini="The class schedule, price, what you are going to learn, how long it is going to take and more information about the class are listed below. If you have further questions, please feel free to call us at 202-386-2702.

" />
<p>Here is a video explaining how to prepare for the class:<a href='#' className='href'> Interview with the Feb 22nd batch students</a></p>
        </div>
    )
}

export default Academy
