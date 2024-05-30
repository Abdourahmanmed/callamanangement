import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';

const Nav = () => {
  return (
    <nav className='w-full shadow-lg h-[70px] px-10 py-4 flex justify-between items-center'>
        <Image src="/post.png" width={50} height={50} alt='logo de la poste' className=''  />
        <div className=" flex items-center gap-8">
            <div className="">
                <AiOutlineUser size={30}  className='text-blue'/>
            </div>
            <div className="">
                <span className='flex inline-block text-gris'>Abdirahman</span>
                <span className='flex inline-block text-blue/70 text-sm font-semibold tracking-wider'>agent</span>
            </div>
        </div>
    </nav>
  )
}

export default Nav