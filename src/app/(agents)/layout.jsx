"use client";
import Nav from '@/components/Nav';
import { useState } from 'react'
import { Sidebar } from "@/components/Sidebar"
import { IoMdAnalytics } from 'react-icons/io';
import { RiTeamLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';

const AgentsLayouts = ({ children }) => {
    //useState
    const [open, setOpen] = useState(true);
    //compotement
    const Open = () => {
        setOpen(!open);
    }
    const Menu = [
        { title: "La poste", icon:<IoMdAnalytics /> ,link:"/post" },
        { title: "ADR", icon: <RiTeamLine /> ,link:"/adr"},
        { title: "Arulos", icon: <FaCode /> ,link:"/arulos"},
        { title: "Commercial", icon: <FaCode /> ,link:"/commerce"},
    ]
    return (
        <main className='flex h-screen'>
            <Sidebar state={open} Menus={Menu} titre="Agents" />
            <div className="text-white h[100%] w-screen overflow-hidden">
                <Nav />
                {children}
            </div>
        </main>
    )
}

export default AgentsLayouts  