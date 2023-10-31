import { Suspense } from 'react'
import ScreenLoader from '@/app/_components/screen-loader'
import Navbar from '@/app/_components/navbar'
import Footer from '@/app/_components/footer'

export default function DefaultLayout({
    children,
}) {
    return (
        <section>
            <Suspense fallback={ <ScreenLoader /> }>
                <Navbar />
                { children }
                <Footer />
            </Suspense>
        </section>
    )
}