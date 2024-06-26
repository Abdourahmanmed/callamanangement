"use client";
import Nav from '@/components/Nav';
import { useState } from 'react'
import { Sidebar } from "@/components/Sidebar"
import { IoMdAnalytics } from 'react-icons/io';
import { RiTeamLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';

const AdminLayouts = ({ children }) => {
    //useState
    const [open, setOpen] = useState(true);
    //compotement
    const Open = () => {
        setOpen(!open);
    }
    const Menu = [
        { title: "Dashboard", icon:<IoMdAnalytics /> ,link:"/admin" },
        { title: "Liste des agents", icon: <RiTeamLine /> ,link:"/agentes"},
        { title: "Scripts", icon: <FaCode /> ,link:"/Scripts"},
    ]
    return (
        <main className='flex h-screen  overflow-hidden'>
            <Sidebar state={open} Menus={Menu} titre="Chef centre" />
            <div className="text-white h[100%] w-[100%]">
                <Nav />
                {children}
            </div>
        </main>
    )
}

export default AdminLayouts