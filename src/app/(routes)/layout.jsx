import { Suspense } from 'react'
import ScreenLoader from '@/app/_components/screen-loader'
import Navbar from '@/app/_components/navbar'

export default function DefaultLayout({
    children,
}) {
    return (
        <section>
            <Suspense fallback={ <ScreenLoader /> }>
                <Navbar />
                { children }
            </Suspense>
        </section>
    )
}