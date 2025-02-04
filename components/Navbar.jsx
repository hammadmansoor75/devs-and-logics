"use client"

import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const links = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/about',
        label: 'About'
    },
    {
        href: '/portfolio',
        label: 'Portfolio'
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleOpen = () => setIsOpen(!isOpen);

  return (
    <header className='w-full bg-lightBlack shadow-md sticky top-0 left-0 z-10' >
        <div className='container mx-auto px-4 py-2' >
            <div className='flex items-center justify-between h-16' >
                <div>
                    <Link href='/' className='text-2xl font-bold text-white' >Devs&Logics</Link>
                </div>
                <div className='hidden md:flex items-center justify-center gap-8' >
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} className={`text-white text-md ${pathname === link.href ? 'border-b border-white font-semibold' : ''}`} >{link.label}</Link>
                    ))}
                    <Link href='/contact' className='bg-white text-md text-black px-4 py-2 rounded-full' >Get in Touch</Link>
                </div>
                <div className='sm:flex md:hidden' >
                    <button onClick={handleOpen} >
                        {isOpen ? <Image src='/assets/cancel-line.svg' alt='cancel' height={30} width={30} /> : <Image src='/assets/bars-line.svg' alt='bars' height={30} width={30}  />}
                    </button>
                </div>
                
            </div>
            {isOpen && (
                    <div className='bg-white w-full py-5 rounded-md' >
                        <div className='flex flex-col items-center justify-center gap-5' >
                            {links.map((link, index) => (
                                <Link onClick={handleOpen} key={index} href={link.href} className={`text-black text-md ${pathname === link.href ? 'border-b border-black font-semibold' : ''}`} >{link.label}</Link>
                            ))}
                            <Link onClick={handleOpen} href='/' className='bg-black text-md text-white px-4 py-2 rounded-full' >Get in Touch</Link>
                        </div>
                    </div>
            )}
        </div>
        
    </header>
  )
}

export default Navbar