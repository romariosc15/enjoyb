'use client'
import { useEffect, useState } from 'react';
import { MdLogin } from 'react-icons/md';
import Link from 'next/link'

export default function Navbar(props) {
    const [theme, setTheme] = useState(props.theme);
    const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 75 ? setTheme('default') : setTheme('white');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);
    const getContainer = () => theme === 'white' ? 'container mx-auto' : 'sticky top-0 bg-white'
    const getStickyNavbar = () => theme === 'white' ? '' : 'container mx-auto'
    const getTitleThemeColor = () => theme === 'white' ? 'text-white' : 'text-title-primary'
    const getLinkThemeColor = () => theme === 'white' ? 'text-white' : 'text-link-primary'
    return (
        <div className={`${getContainer()}`}>
            <div className={`flex flex-row items-center py-4 ${getStickyNavbar()}`}>
                <h1 className={`text-2xl font-bold mr-8 ${getTitleThemeColor()}`}>ENJOYB</h1>
                <ul className={`text-sm font-semibold space-x-6 ${getLinkThemeColor()}`}>
                    <Link href={`/`}>
                        <li className='inline-block hover:text-link-active'>Home</li>
                    </Link>
                    <Link href={`/jobs`}>
                        <li className='inline-block hover:text-link-active'>Jobs</li>
                    </Link>
                    <Link href={`/jobs/search`}>
                        <li className='inline-block hover:text-link-active'>Advanced search</li>
                    </Link>
                </ul>
                <div className='ml-auto'>
                    <Link href={`/`} className='py-3 px-4 space-x-2 flex items-center rounded-md text-sm bg-button-primary text-white font-semibold'>
                        <MdLogin size={20} />
                        <span>Login</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}