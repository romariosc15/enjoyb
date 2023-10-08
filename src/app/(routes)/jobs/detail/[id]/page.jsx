'use client'
import Breadcrumb from '@/app/_components/breadcrumb'

export default async function JobDetail(props) {
  const breadcrumbPath = [
    {name: 'Home', path: '/'},
    {name: 'Jobs', path: '/jobs'}
  ]
  return (
    <main>
      <div className='bg-section-primary'>
        <div className='container mx-auto'>
          <Breadcrumb path={breadcrumbPath} />
        </div>
      </div>
      <div className=''>
        {props.params.id}
      </div>
    </main>
  )
}