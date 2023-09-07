'use client'

import React, {useEffect , useState , useRef} from 'react'

//style
import './style.scss'

function Select() {
    const [selectValue, setSelectValue] = useState("Select Property Type");
    const optionsClose = useRef(null)

    function selectFunction() {
        const options = document.getElementById("options");
        const rotate = document.getElementById("rotat")

        if (options.style.display === "none") {
            options.style.display = "block";
            rotate.classList.add("rotate")
        } else {
            options.style.display = "none";
            rotate.classList.remove("rotate")
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
      }, [])
      
    const handleClickOutside = (e) => {
        if (!optionsClose.current.contains(e.target)) {
            document.getElementById("rotat").classList.remove("rotate")
            document.getElementById("options").style.display = "none"
        }
    }
    return (
        <div className='select' onClick={selectFunction} ref={optionsClose}>
            <svg id='rotat' xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
                <path d="M7.58521 6.57766C7.23581 6.82982 6.76419 6.82982 6.41479 6.57767L0.848983 2.56089C0.0621447 1.99304 0.46384 0.750001 1.43419 0.750001L12.5658 0.75C13.5362 0.75 13.9379 1.99303 13.151 2.56088L7.58521 6.57766Z" fill="#AAAAAA" />
            </svg>
            <div className='option'>
                {selectValue}
            </div>
            <div id='options'>
                <div className='option' onClick={() => setSelectValue('option 1')}>
                    option 1
                </div>
                <div className='option' onClick={() => setSelectValue('option 2')}>
                    option 2
                </div>
            </div>
        </div>
    )
}

export default Select;