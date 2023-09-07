'use client'

import React, { useEffect, useState, useRef } from 'react'

//style
import './style.scss'

function ContactInfo() {
    const selectButton = useRef(null)

    function submitHandler() {

    }
    const [selectValue, setSelectValue] = useState("Mövzu");
    const [contactinfo, setcontactinfo] = useState({
        name: '',
        email: '',
    })

    function selectFunction() {
        const option = document.getElementById("option");
        const rotate = document.getElementById("rotate")

        if (option.style.display === "none") {
            option.style.display = "block";
            rotate.classList.add("rotate")
        }
        else {
            option.style.display = "none";
            rotate.classList.remove("rotate")
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
      }, [])
      
    const handleClickOutside = (e) => {
        if (!selectButton.current.contains(e.target)) {
            document.getElementById("rotate").classList.remove("rotate")
            document.getElementById("option").style.display = "none"
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setcontactinfo((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className='contactInfo'>
            <div className="container">
                <div>
                    <h2>
                        Contact Information
                    </h2>
                    <div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.0002 10.999H22.0002C22.0002 5.869 18.1272 2 12.9902 2V4C17.0522 4 20.0002 6.943 20.0002 10.999Z" fill="white" />
                                <path d="M12.9998 8.00024C15.1028 8.00024 15.9998 8.89724 15.9998 11.0002H17.9998C17.9998 7.77524 16.2248 6.00024 12.9998 6.00024V8.00024ZM16.4218 13.4432C16.2296 13.2686 15.9771 13.1754 15.7176 13.1835C15.4581 13.1915 15.2118 13.3001 15.0308 13.4862L12.6378 15.9472C12.0618 15.8372 10.9038 15.4762 9.71179 14.2872C8.51979 13.0942 8.15879 11.9332 8.05179 11.3612L10.5108 8.96724C10.6972 8.78637 10.8059 8.54006 10.814 8.28045C10.822 8.02083 10.7287 7.76828 10.5538 7.57624L6.85879 3.51324C6.68384 3.3206 6.44067 3.20374 6.18095 3.1875C5.92122 3.17125 5.66539 3.2569 5.46779 3.42624L3.29779 5.28724C3.1249 5.46075 3.02171 5.69169 3.00779 5.93624C2.99279 6.18624 2.70679 12.1082 7.29879 16.7022C11.3048 20.7072 16.3228 21.0002 17.7048 21.0002C17.9068 21.0002 18.0308 20.9942 18.0638 20.9922C18.3083 20.9786 18.5391 20.8749 18.7118 20.7012L20.5718 18.5302C20.7413 18.3328 20.8271 18.077 20.811 17.8173C20.795 17.5576 20.6783 17.3143 20.4858 17.1392L16.4218 13.4432Z" fill="white" />
                            </svg>
                            <a href='tel:+1012 3456 789'>
                                +1012 3456 789
                            </a>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M20 0H0V16H20V0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="white" />
                            </svg>
                            <a href="mailto:demo@gmail.com">
                                demo@gmail.com
                            </a>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
                                <path d="M9.00001 0.5C6.81276 0.50258 4.71584 1.3726 3.16923 2.91922C1.62261 4.46584 0.752589 6.56276 0.750009 8.75C0.747389 10.5374 1.33124 12.2763 2.41201 13.7C2.41201 13.7 2.63701 13.9963 2.67376 14.039L9.00001 21.5L15.3293 14.0353C15.3623 13.9955 15.588 13.7 15.588 13.7L15.5888 13.6978C16.669 12.2747 17.2526 10.5366 17.25 8.75C17.2474 6.56276 16.3774 4.46584 14.8308 2.91922C13.2842 1.3726 11.1873 0.50258 9.00001 0.5ZM9.00001 11.75C8.40666 11.75 7.82665 11.5741 7.3333 11.2444C6.83995 10.9148 6.45543 10.4462 6.22837 9.89805C6.00131 9.34987 5.9419 8.74667 6.05765 8.16473C6.17341 7.58279 6.45913 7.04824 6.87869 6.62868C7.29825 6.20912 7.83279 5.9234 8.41474 5.80764C8.99668 5.69189 9.59988 5.7513 10.1481 5.97836C10.6962 6.20542 11.1648 6.58994 11.4944 7.08329C11.8241 7.57664 12 8.15666 12 8.75C11.999 9.54535 11.6826 10.3078 11.1202 10.8702C10.5578 11.4326 9.79535 11.749 9.00001 11.75Z" fill="white" />
                            </svg>
                            <div>
                                132 Dartmouth Street Boston, Massachusetts 02156 United States
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contactUs'>
                    <h3>
                        Contact Us
                    </h3>

                    <form onSubmit={submitHandler}>
                        <div className={contactinfo.name !== "" ? 'form-group col6 activeLabel' : 'form-group col6'}>
                            <input id="name" type="text" name="name" required value={contactinfo.name} onChange={handleChange} />
                            <label htmlFor="name">
                                Ad Soyad
                            </label>
                        </div>
                        <div className="form-group col6">
                            <div className='select' onClick={selectFunction} ref={selectButton}>
                                <svg id='rotate' xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                    <path d="M14.25 7.125L9 12.375L3.75 7.125" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div className='option'>
                                    {selectValue}
                                </div>
                                <div id='option'>
                                    <div className='option' onClick={() => setSelectValue('option 1')}>
                                        option 1
                                    </div>
                                    <div className='option' onClick={() => setSelectValue('option 2')}>
                                        option 2
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={contactinfo.email !== "" ? 'form-group col12 activeLabel' : 'form-group col12'}>
                            <input id="email" type="email" name="email" required value={contactinfo.email} onChange={handleChange} />
                            <label htmlFor="email">
                                E-mail
                            </label>
                        </div>
                        <div className='form-group col12 textarea'>
                            <textarea name="message" id="message" placeholder='Mesajınızı daxil edin..'></textarea>
                            <label htmlFor="message">
                                Mesaj
                            </label>
                        </div>
                        <div className='button'>
                            <button type='submit'>Mesaj göndər</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo