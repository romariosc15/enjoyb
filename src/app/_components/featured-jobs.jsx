import FeaturedJobCard from '@/app/_components/featured-job-card'
import { contentful } from '@/app/_libs/contentful';
export default async function FeaturedJobs() {
  const response = await contentful.getEntries({
    content_type: 'jobs'
  });

  const jobs = response.items;
  return (
    <div className='container mx-auto py-12'>
      <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-title-primary'>Trabajos destacados</h1>
          <p className='mt-3 text-description-primary'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          </p>
      </div>
      <div className='mt-8 grid grid-cols-4 gap-5'>
        {jobs.map((job) => <FeaturedJobCard key={job.sys.id} job={job} />)}
      </div>
    </div>
  )
}