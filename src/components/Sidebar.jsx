"use client";
import React from 'react'
import Image from "next/image";
import { useState } from "react";
import { IoMdAnalytics } from 'react-icons/io';
import { RiTeamLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
export const Sidebar = ({ state}) => {
    //useState
    const patname = usePathname();
    // const [open, setOpen] = useState(true);
    const [SubMenuOpen, SetSubMenuOpen] = useState(false);
    const Menus = [
        { title: "Dashboard", icon:<IoMdAnalytics /> ,link:"/" },
        { title: "Liste des agents", icon: <RiTeamLine /> ,link:"/Agentes"},
        { title: "Scripts", icon: <FaCode /> ,link:"/Scripts"},
    ]

    return (
        <div className={`bg-blue h-full text-white p-5 pt-8 ${state ? "w-80" : "w-20"} duration-300`}>
            <div className="inline-flex">
                {/* <Image src="/settings.png" width={30} height={10} className={`cursor-pointer block float-left mr-2 ${open && "rotate-[360deg]"} duration-500`} alt="user icon" /> */}
                <h1 className={`text-yellow-1 origin-left font-medium text-2xl ${!state && "scale-0"} duration-300`}>Admin</h1>
            </div>
            <ul>
                {Menus.map((menu, index) => {
                    return (
                        <>
                            <li
                                key={index}
                                className={`text-white flex items-center gap-x-1 cursor-pointer p-2 group hover:bg-yellow ${!state && "h-9"} ${patname === menu.link?"bg-yellow":"bg-none"} rounded-md mt-2`}
                            >
                                <span className={`cursor-pointer block float-left mr-2 ${state && "rotate-[360deg]"} ${patname === menu.link?"text-blue":"text-white"} duration-500 group-hover:text-blue`}>
                                    {menu.icon}
                                </span>
                                <a className={`font-medium flex-1 text-base ${!state && "hidden"} ${patname === menu.link?"text-blue":"text-white"} duration-500 group-hover:text-blue`} href={menu.link}>{menu.title}</a>
                            </li>
                          
                        </>
                    );
                })}
            </ul>




        </div>
    )
}
