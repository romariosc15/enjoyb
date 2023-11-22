'use client'
import { Fragment, useEffect, useState, useContext } from 'react'
import Breadcrumb from '@/app/_components/breadcrumb'
import JobCard from '@/app/_components/job-card'
import Filters from '@/app/_components/filters'
import { getJobs } from '@/actions/contentful'
import { AppContext } from '@/app/_providers/AppContext';
import JobCardSkeleton from '@/app/_components/Skeletons/job-card'

export default function JobsContainer(props) {
    const breadcrumbPath = [
        {name: 'Home', path: '/'},
        {name: 'Jobs', path: '/jobs'}
    ]
    const [areJobsLoading, setAreJobsLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const { filters } = useContext(AppContext)

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await getJobs(filters)
            console.log(response)
            setJobs(response)
            setAreJobsLoading(false)
        }
        fetchJobs()
    }, [filters])

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
                    {
                        areJobsLoading ? [...Array(4)].map((_, index) => <JobCardSkeleton key={`job-card-skeleton-${index}`} />)
                        : jobs.map((job) => <JobCard key={job.sys.id} job={job} />)
                    }
                </div>
            </div>
        </Fragment>

    )
}