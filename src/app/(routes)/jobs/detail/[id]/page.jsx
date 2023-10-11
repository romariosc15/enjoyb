import Breadcrumb from '@/app/_components/breadcrumb'
import { contentful } from '@/app/_libs/contentful';

export default async function JobDetail(props) {
  const breadcrumbPath = [
    {name: 'Home', path: '/'},
    {name: 'Jobs', path: '/jobs'}
  ]
  const response = await contentful.getEntry({
    content_type: 'jobs',
    id: props.params.id,
  });

  const job = response;
  console.log(job)
  return (
    <main>
      <div className='bg-section-primary'>
        <div className='container mx-auto'>
          <Breadcrumb path={breadcrumbPath} />
        </div>
      </div>
      <div className=''>
        {props.params.id } - { job.fields.title } - { job.fields.company }
      </div>
    </main>
  )
}