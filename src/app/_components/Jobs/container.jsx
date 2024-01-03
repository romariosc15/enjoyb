'use client'
import { Fragment, useEffect, useState, useContext } from 'react'
import Breadcrumb from '@/app/_components/breadcrumb'
import JobCard from '@/app/_components/job-card'
import Filters from '@/app/_components/filters'
import { getJobs } from '@/actions/contentful'
import { AppContext } from '@/app/_providers/AppContext'
import JobCardSkeleton from '@/app/_components/Skeletons/job-card'
import { LuSearchX } from 'react-icons/lu'
import { useSearchParams, useRouter } from 'next/navigation'
import {Button} from "@nextui-org/button"
import Link from 'next/link'

export default function JobsContainer() {
    const breadcrumbPath = [
        {name: 'Home', path: '/'},
        {name: 'Jobs', path: '/jobs'}
    ]
    const [areJobsLoading, setAreJobsLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const { filters } = useContext(AppContext)
    
    const searchParams = useSearchParams()
    const parametersSize = searchParams.size

    const router = useRouter()
    useEffect(() => {
        const fetchJobs = async () => {
            setAreJobsLoading(true)
            const response = await getJobs(filters)
            setJobs(response)
            setAreJobsLoading(false)
        }
        if(('industry' in filters && 'jobType' in filters) | parametersSize <= 0) fetchJobs()
    }, [filters, parametersSize])

    const removeQueryParameters = () => {
        router.push('/jobs')
    }

    const renderJobs = () => {
        if(areJobsLoading)
            return [...Array(4)].map((_, index) => <JobCardSkeleton key={`job-card-skeleton-${index}`} />)
        else {
            if(jobs.length > 0)
                return jobs.map((job) => <JobCard key={job.sys.id} job={job} />)
            else
                return (
                    <div className='text-center'>
                        <LuSearchX className='inline-block align-sub text-red-500 mb-4' size={120} />
                        <h5 className='text-2xl text-title-primary font-bold'>No se encontraron resultados</h5>
                        <p className='text-lg text-description-alternative'>Intente cambiar los criterios de búsqueda</p>
                        {
                            parametersSize > 0 ?
                            <Button onPress={removeQueryParameters} size='lg' href={`/jobs`} as={Link} className='bg-gray-alternative text-button-primary font-bold mt-4'>
                                Eliminar parametros de búsqueda
                            </Button> : ''
                        }
                    </div>
                )
        }
    }

    return (
        <Fragment>
            <div className='bg-section-primary'>
                <div className='container mx-auto'>
                    <Breadcrumb path={breadcrumbPath} />
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 container mx-auto py-12 min-h-[650px]'>
                <div className='bg-section-alternative rounded-lg h-fit'>
                    <Filters />
                </div>
                <div className='col-span-1 xl:col-span-2 space-y-6 px-4 xl:px-0'>
                    {renderJobs()}
                </div>
            </div>
        </Fragment>

    )
}