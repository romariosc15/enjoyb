import { Suspense } from 'react'
import { MdArrowDropDown, MdSearch, MdWorkOutline, MdLocationOn } from 'react-icons/md';
import { ScreenLoader } from '@/app/_components/screen-loader'
import Navbar from '@/app/_components/navbar'

export default function Home() {
  return (
    <main>
      <Suspense fallback={ <ScreenLoader /> }>
        <div style={{backgroundImage: 'url(./images/background/home/home-search-2.jpg)', height: '800px', backgroundColor: '#021a2e'}} className='bg-no-repeat bg-cover bg-center'>
          <Navbar theme="white"/>
          <div className='flex flex-col items-center justify-center h-full border-t border-white/25'>
            <h1 className='text-5xl text-white font-bold text-center leading-snug'>
              Encuentra oportunidades emocionantes<br />
              & totalmente remotas
            </h1>
            <div className='mt-8 flex flex-row items-center'>
              <div className='flex flex-row items-center border-r border-gray bg-white pl-4'>
                <MdSearch size={20} />
                <input className='h-16 w-96 px-4 focus-visible:outline-none' type="text" />
              </div>
              <div className='flex flex-row items-center border-r border-gray bg-white px-4'>
                <MdWorkOutline size={20} />
                <select className='h-16 w-72 px-4 appearance-none focus-visible:outline-none' name="" id="">
                  <option value="software">Software application</option>
                  <option value="healthcare">Healthcare</option>
                </select>
                <MdArrowDropDown size={20} />
              </div>
              <div className='flex flex-row items-center border-r border-gray bg-white px-4'>
                <MdLocationOn size={20} />
                <select className='h-16 w-72 px-4 appearance-none focus-visible:outline-none' name="" id="">
                  <option value="software">Tacna</option>
                  <option value="healthcare">Moquegua</option>
                </select>
                <MdArrowDropDown size={20} />
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  )
}
 