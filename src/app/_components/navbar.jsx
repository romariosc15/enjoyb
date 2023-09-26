import { MdLogin } from 'react-icons/md';
import Link from 'next/link'

export default function Navbar(props) {
    const getTitleThemeColor = () => props.theme === 'white' ? 'text-white' : 'text-title-primary'
    const getLinkThemeColor = () => props.theme === 'white' ? 'text-white' : 'text-link-primary'
    return (
        <div className='container mx-auto flex flex-row items-center py-4'>
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
    )
}