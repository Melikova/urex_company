import React from 'react';
import Image from 'next/image';

// image
import logo from './../../images/logo.svg';

// style
import './style.scss';

function MobileHeader(props) {
    return (
        <div className="mobileHeader">
            <div className="logo">
                <Image src={logo} alt="Picture of the author" />
            </div>
            <div className='hamburger-menu' onClick={props.hamburgerSlide}>
                <div className={props.hamburgerMenu ? 'active' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;