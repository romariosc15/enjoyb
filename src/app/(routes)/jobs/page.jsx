import { ScreenLoader } from '@/app/_components/screen-loader'
import Breadcrumb from '@/app/_components/breadcrumb'

export default function JobSearch() {
  const breadcrumbPath = [
    {name: 'Home', path: '/'},
    {name: 'Jobs', path: '/jobs'}
  ]
  return (
    <main className="">
      <ScreenLoader />
      <div className='bg-emerald-800'>
        <div className='container mx-auto'>
          <Breadcrumb path={breadcrumbPath} />
        </div>
      </div>
    </main>
  )
}