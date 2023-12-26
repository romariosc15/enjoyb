import './globals.css'
import { Roboto } from 'next/font/google'
import {NextUI as NextUIProvider} from "./_providers/NextUI";
import QuickApply from '@/app/_components/Modals/QuickApply'
import { AppProvider } from "@/app/_providers/AppContext";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "500", "700", "900"],
})

export const metadata = {
  title: 'Enjoyb - Job search',
  description: 'Job portal to search job opportunities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextUIProvider>
          <AppProvider>
            <main className='light'>
              {children}
              <QuickApply /> 
            </main>
          </AppProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
