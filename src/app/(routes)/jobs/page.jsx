import Breadcrumb from '@/app/_components/breadcrumb'
import JobCard from '@/app/_components/job-card'
export default async function Jobs() {
  const breadcrumbPath = [
    {name: 'Home', path: '/'},
    {name: 'Jobs', path: '/jobs'}
  ]
  const data = [
    {id: 1, logo: 'facebook.png', name: 'Frontend Developer', description: 'CSS3, HTML5, Javascript, Material UI & React', salaryMin: 5500, salaryMax: 7000, company: 'Facebook', location: 'California', typeOfContract: 'Full time', date: '07/10/2023'},
    {id: 2, logo: 'microsoft.png', name: 'Backend Developer', description: 'Javascript, Node.js, Express & SQL', salaryMin: 5000, salaryMax: 7250, company: 'Microsoft', location: 'New York', typeOfContract: 'Part time', date: '07/10/2023'},
    {id: 3, logo: 'google.png', name: 'Frontend Developer', description: 'CSS3, HTML5, Javascript, Tailwind & Vue', salaryMin: 5250, salaryMax: 7250, company: 'Google', location: 'San Francisco', typeOfContract: 'Full time', date: '07/10/2023'},
    {id: 4, logo: 'airbnb.png', name: 'UX/UI Designer', description: 'Adobe XD, Figma, HTML & CSS', salaryMin: 4000, salaryMax: 6500, company: 'Airbnb', location: 'San Francisco', typeOfContract: 'Full time', date: '07/10/2023'}
  ]
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
          {data.map((job) => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </main>
  )
}