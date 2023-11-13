import { Fragment } from 'react';
import Breadcrumb from '@/app/_components/breadcrumb'
import JobCard from '@/app/_components/job-card'
import Filters from '@/app/_components/filters'
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

  return (
    <Fragment>
      <div className='bg-section-primary'>
        <div className='container mx-auto'>
          <Breadcrumb path={breadcrumbPath} />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-6 container mx-auto py-12 min-h-[650px]'>
        <div className='bg-section-alternative rounded-lg'>
          <Filters />
        </div>
        <div className='col-span-2 space-y-6'>
          {jobs.map((job) => <JobCard key={job.sys.id} job={job} />)}
        </div>
      </div>
    </Fragment>
  )
}