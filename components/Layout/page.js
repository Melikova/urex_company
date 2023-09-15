"use client"
import Sidebar from '../Sidebar/page'
import { SignContext } from '../../contexts/SignContext'
import { useContext, useState, useEffect } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import classNames from "classnames"
import { useRouter } from 'next/navigation'
import { Input } from "@material-tailwind/react";

export default function Layout() { 
    const router = useRouter();
    const {toggleCollapse, setToggleCollapse} = useContext(SignContext);
    const [avatarOn, setAvatarOn] = useState(false);
    const [isLogged, setIsLogged] = useState("");

    const handleToogle=()=>{
        setToggleCollapse(!toggleCollapse);
    }

    const signOut = ()=>{
        localStorage.removeItem("isLoggedIn");
        setIsLogged(false);
    }

    const handleAvatarToggle = () => {
        setAvatarOn((current)=>!current);
      };


    return (
        <div className='h-screen flex flex-row justify-start '>
            <Sidebar/>
            <div className='flex-1 relative'>
                <div className='absolute w-full flex items-center justify-between py-6 px-5'>
                    <a className="" href="#" onClick={handleToogle}>
                        <FaAngleLeft size={23} className={classNames({"rotate-180":toggleCollapse})}/>
                    </a>
                    <div className="relative ml-3 cursor-pointer">
                        <div className="flex items-center" onClick={handleAvatarToggle} >
                          <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                          </button>
                          <div className='ms-3 text-black text-base font-medium'>johndoe@gmail.com</div>
                          <FaChevronDown size={12} className='text-white ms-2'/>
                        </div>
                        {avatarOn &&
                            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-0">Go to Dashboard</a>
                              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-1">Account Settings</a>
                              <a href="#" onClick={()=>signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                            </div>
                        }
                    </div>
                </div>
                <div className="px-8" style={{"margin-top": "140px"}}>
                    <div className="w-full">
                        <div className='font-semibold text-lg my-5'>Property Information</div>
                        <Input
                          type="text"
                          placeholder="Property name"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "min-w-[100px] my-2" }}
                          size="lg"
                        />
                    </div>
                    <div className="w-full">
                        <div className='font-semibold text-lg my-5'>Address details</div>
                        <Input
                          type="text"
                          placeholder="Property full adress"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "my-2 min-w-[100px]" }}
                          size="lg"
                        />
                        <div className='flex space-x-5'>
                        <Input
                          type="text"
                          placeholder="Street"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "my-2 min-w-[100px]" }}
                          size="lg"
                        />
                        <Input
                          type="text"
                          placeholder="City"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "my-2 min-w-[100px]" }}
                          size="lg"
                        />
                        </div>
                        <div className='flex space-x-5'>
                        <Input
                          type="text"
                          placeholder="State"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "my-2 min-w-[100px]" }}
                          size="lg"
                        />
                        <Input
                          type="text"
                          placeholder="ZIP Code"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "my-2 min-w-[100px]" }}
                          size="lg"
                        />
                        </div>
                        <div className='flex space-x-5'>
                        <Input
                          type="text"
                          placeholder="Country"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "my-2 min-w-[100px]" }}
                          size="lg"
                        />
                        <Input
                          type="text"
                          placeholder="County"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "my-2 min-w-[100px]" }}
                          size="lg"
                        />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className='font-semibold text-lg my-5'>Property detail</div>
                        <Input
                          type="text"
                          placeholder="Property type"
                          className="!border !border-gray-300 bg-white text-gray-900 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "my-2 min-w-[100px]" }}
                          size="lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
  }
  

