'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import LoginModal from '@/app/_components/Modals/Login'

export default function Navbar(props) {
    const [isSticky, setIsSticky] = useState(false);
    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 75 ? setIsSticky(true) : setIsSticky(false);
        }
    };

    useEffect(() => {
        stickNavbar()
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);
    const getContainer = () => isSticky ? 'xl:sticky xl:top-0 bg-white shadow-md' : 'container mx-auto'
    const getStickyNavbar = () => isSticky ? 'container mx-auto' : ''
    const getTitleThemeColor = () => props.theme === 'home' && !isSticky ? 'text-white' : 'text-title-primary'
    const getLinkThemeColor = () => props.theme === 'home' && !isSticky ? 'text-white' : 'text-link-primary'
    const routes = [
        {path: '/', label: 'Home'},
        {path: '/jobs', label: 'Jobs'},
        {path: '/about-us', label: 'About us'}
    ]
    return (
        <div className={`z-10 ${getContainer()}`}>
            <div className={`flex flex-row items-center px-4 xl:px-0 py-4 ${getStickyNavbar()}`}>
                <Link href='/'>
                    <h1 className={`text-2xl font-bold mr-8 ${getTitleThemeColor()}`}>ENJOYB</h1>
                </Link>
                <ul className={`hidden xl:block text-sm font-semibold space-x-6 ${getLinkThemeColor()}`}>
                    {
                        routes.map((route) => (
                            <li key={route.path} className='transition-colors inline-block hover:text-link-active'>
                                <Link href={route.path}>
                                    {route.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className='ml-auto'>
                    <LoginModal /> 
                </div>
            </div>
        </div>
    )
}