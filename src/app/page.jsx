import { Suspense } from 'react'
import { AppProvider } from "@/app/_providers/AppContext";
import ScreenLoader from '@/app/_components/screen-loader'
import Navbar from '@/app/_components/navbar'
import Footer from '@/app/_components/footer'
import FeaturedJobs from '@/app/_components/featured-jobs'
import QuickSearch from '@/app/_components/Home/quick-search'

export default function Home() {
  return (
    <Suspense fallback={ <ScreenLoader /> }>
      <div style={{backgroundImage: 'url(./images/background/home/home-search-2.jpg)', height: '800px', backgroundColor: '#021a2e'}} className='bg-no-repeat bg-cover bg-center'>
        <Navbar theme='home'/>
        <div className='flex flex-col items-center justify-center h-full border-t border-white/20'>
          <h1 className='text-5xl text-white font-bold text-center leading-snug'>
            Encuentra oportunidades emocionantes<br />
            & totalmente remotas
          </h1>
          <div className='mt-8 flex flex-row items-center'>
            <QuickSearch />
          </div>
        </div>
      </div>
      <FeaturedJobs />
      <Footer />
    </Suspense>
  )
}
 