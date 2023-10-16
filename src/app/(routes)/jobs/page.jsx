
import Breadcrumb from '@/app/_components/breadcrumb'
import JobCard from '@/app/_components/job-card'
import { contentful } from '@/app/_libs/contentful';

export default async function Jobs() {
  const breadcrumbPath = [
    {name: 'Home', path: '/'},
    {name: 'Jobs', path: '/jobs'}
  ]

  const response = await contentful.getEntries({
    content_type: 'jobs'
  });

  const jobs = response.items;
  console.log(jobs)

  return (
    <main>
      <div className='bg-section-primary'>
        <div className='container mx-auto'>
          <Breadcrumb path={breadcrumbPath} />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 container mx-auto py-12'>
        <div className='bg-section-alternative rounded-lg'>
          <div className='py-4 px-6 border-b border-alternative'>
            <h1 className='text-xl font-bold text-title-primary'>Search filters</h1>
          </div>
          <div className='py-4 px-6'>
            <div className='space-y-2'>
              <label className='text-lg font-medium text-label-primary' htmlFor="job-category">Categoría</label>
              <select className='h-12 w-full px-4 appearance-none focus-visible:outline-none rounded-md border-default border' name='job-category' id='job-category'>
                <option value='software'>Software application</option>
                <option value='healthcare'>Healthcare</option>
              </select>
            </div>
          </div>
        </div>
        <div className='col-span-2 space-y-6'>
          {jobs.map((job) => <JobCard key={job.sys.id} job={job} />)}
        </div>
      </div>
    </main>
  )
}