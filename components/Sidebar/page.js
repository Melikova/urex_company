import classNames from "classnames"
import { SignContext } from '../../contexts/SignContext'
import { useContext } from 'react'

import Image from 'next/image';
import logo from './../../images/logo_2.svg';
import logo_white from './../../images/logo_white.svg';
import residential_icon from './../../images/fi_230533.png';
import home_icon from './../../images/fi_483276.png';
import marketing_icon from './../../images/fi_151776.png';
import investment_icon from './../../images/fi_151772.png';
import photos_icon from './../../images/fi_833281.png';
import person_icon from './../../images/fi_9706582.png';
import eye_icon from './../../images/fi_9177035.png';
import confidence_icon from './../../images/fi_10408351.png';

const menuItems= [
    {id:1, label: "Property Information", icon: home_icon, link:"/"},
    {id:2, label: "Marketing Description", icon: marketing_icon, link:"/"},
    {id:3, label: "Investment Details", icon: investment_icon, link:"/"},
    {id:4, label: "Photos and Videos", icon: photos_icon, link:"/"},
    {id:4, label: "Confidentiality", icon: confidence_icon, link:"/"},
    {id:4, label: "Listing Person Details", icon: person_icon, link:"/"},
    {id:4, label: "Preview", icon: eye_icon, link:"/"},
]

export default function Sidebar() { 
    const {toggleCollapse} = useContext(SignContext);
    const wrapperClass=classNames(
        "rounded-tr-3xl h-screen px-4 pt-8 flex justify-between flex-col",
        {
            ['w-80']: !toggleCollapse,
            ['w-20']: toggleCollapse
        }
    )

    return (
        <>
            <div style={{
                "background": "#21364b", 
                "transition":"width 200ms cubic-bezier(0.2, 0, 0, 1) 0s"
                }} 
                className={wrapperClass}
            >
                <div className='flex flex-col text-white'>
                    <div className='flex items-center justify-start'>
                        <Image className="me-6" src={logo_white} alt="Picture of the author" />
                        <span className={classNames('mt-2 text-3xl font-semibold', {
                            hidden: toggleCollapse
                            })}>
                            UREXC
                        </span>
                    </div>
                    <a className={classNames("flex items-center justify-start cursor-pointer font-semibold text-xl mt-20 mb-8 rounded w-full rounded-lg bg-white text-black py-3 px-5",{hidden: toggleCollapse})}>
                        <Image className="me-4" src={residential_icon} alt="Picture of the author" />
                        Residential
                    </a>
                    <a className={classNames("bg-white rounded mt-20 mb-12 py-3 px-3 cursor-pointer",{hidden: !toggleCollapse})}>
                        <Image className="me-4" src={residential_icon} alt="Picture of the author" />
                    </a>
                    <div className="flex flex-col items-start me-4">
                        {menuItems.map(({...menu})=>{
                            return(
                                <>
                                    <a className={classNames("ms-2 mb-10 cursor-pointer",{hidden: !toggleCollapse})}>
                                        <Image className="me-4" src={menu.icon} alt="Picture of the author" />
                                    </a>
                                    <a 
                                        href={menu.link} 
                                        className={classNames("text-lg w-full flex items-center space-x-3 mb-2 py-3 px-4 rounded hover:bg-sky-900",{
                                                hidden: toggleCollapse
                                                })}
                                    >
                                        <div>
                                            <Image src={menu.icon} alt="Picture of the author" />
                                        </div>
                                        <div className="whitespace-nowrap">{menu.label}</div>
                                    </a>
                                </>
                            )
                        })}
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
  }
  