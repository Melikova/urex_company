"use client"

import React, { useState , useEffect } from 'react'
import Image from 'next/image'

//style 
import './style.scss'

//image
import curve from './../../images/curve.png'
import playButton from './../../images/playButton.png'

function AroundText() {
    const [state, setState] = useState(false)

   useEffect(()=>{
    const addClassScroll = () => {
        const scroll = document.documentElement.scrollTop
        if (scroll > 200) {
            setState(true)
        }
        else {
            setState(false)
        }
    }
    window.addEventListener('scroll', addClassScroll)

   })
   

    return (
        <div className={state ? 'aroundText aroundScroll' : 'aroundText'}>
            <Image
                className='roatetimage'
                src={curve}
                alt=""
            />
            <Image
                className='playbutton'
                src={playButton}
                alt=""
            />
        </div>
    )
}

export default AroundText