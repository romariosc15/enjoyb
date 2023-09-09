import Breadcrumb from '@/app/_components/breadcrumb'

export default async function Jobs() {
  const breadcrumbPath = [
    {name: 'Home', path: '/'},
    {name: 'Jobs', path: '/jobs'}
  ]
  return (
    <main className="">
      <div className='bg-breadcrumb-primary'>
        <div className='container mx-auto'>
          <Breadcrumb path={breadcrumbPath} />
        </div>
      </div>
    </main>
  )
}