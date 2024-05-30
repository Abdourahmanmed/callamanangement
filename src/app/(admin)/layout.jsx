"use client";
import Nav from '@/components/Nav';
import { useState } from 'react'
import { Sidebar } from "@/components/Sidebar"

const AdminLayouts = ({ children }) => {
    //useState
    const [open, setOpen] = useState(true);
    //compotement
    const Open = () => {
        setOpen(!open);
    }
    return (
        <main className='flex h-screen  overflow-hidden'>
            <Sidebar state={open} />
            <div className="text-white h[100%] w-[100%]">
                <Nav />
                {children}
            </div>
        </main>
    )
}

export default AdminLayouts