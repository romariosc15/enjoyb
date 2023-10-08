import FeaturedJobCard from '@/app/_components/featured-job-card'
export default function FeaturedJobs() {
    const data = [
      {id: 1, logo: 'facebook.png', name: 'Frontend Developer', description: 'CSS3, HTML5, Javascript, Material UI & React', salaryMin: 5500, salaryMax: 7000, company: 'Facebook', location: 'California', typeOfContract: 'Full time', date: '07/10/2023'},
      {id: 2, logo: 'microsoft.png', name: 'Backend Developer', description: 'Javascript, Node.js, Express & SQL', salaryMin: 5000, salaryMax: 7250, company: 'Microsoft', location: 'New York', typeOfContract: 'Part time', date: '07/10/2023'},
      {id: 3, logo: 'google.png', name: 'Frontend Developer', description: 'CSS3, HTML5, Javascript, Tailwind & Vue', salaryMin: 5250, salaryMax: 7250, company: 'Google', location: 'San Francisco', typeOfContract: 'Full time', date: '07/10/2023'},
      {id: 4, logo: 'airbnb.png', name: 'UX/UI Designer', description: 'Adobe XD, Figma, HTML & CSS', salaryMin: 4000, salaryMax: 6500, company: 'Airbnb', location: 'San Francisco', typeOfContract: 'Full time', date: '07/10/2023'}
    ]
    return (
      <div className='container mx-auto py-12'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold text-title-primary'>Trabajos destacados</h1>
            <p className='mt-3 text-description-primary'>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            </p>
        </div>
        <div className='mt-8 grid grid-cols-4 gap-5'>
          {data.map((job) => <FeaturedJobCard key={job.id} job={job} />)}
        </div>
      </div>
    )
}