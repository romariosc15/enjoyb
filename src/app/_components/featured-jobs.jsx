'use client'
import { useEffect, useState } from 'react';
import FeaturedJobCard from '@/app/_components/featured-job-card'
import FeaturedJobCardSkeleton from '@/app/_components/Skeletons/featured-job-card'
import { getFeaturedJobs } from '@/actions/contentful'

export default function FeaturedJobs() {
  const [featuredJobs, setFeaturedJobs] = useState([])
  const [areFeaturedJobsLoading, setAreFeaturedJobsLoading] = useState(true)
  useEffect(() => {
      const fetchFeaturedJobs = async () => {
          const response = await getFeaturedJobs()
          setFeaturedJobs(response)
          setAreFeaturedJobsLoading(false)
      }
      fetchFeaturedJobs()
  }, [])
  return (
    <div className='container mx-auto py-16'>
      <div className='flex flex-col justify-center items-center px-4 xl:px-0'>
          <h1 className='text-3xl xl:text-4xl font-bold text-title-primary'>Trabajos destacados</h1>
          <p className='mt-3 text-description-primary text-sm xl:text-base text-center'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          </p>
      </div>
      <div className='mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8 px-4 xl:px-0'>
        {
          areFeaturedJobsLoading ? [...Array(3)].map((_, index) => <FeaturedJobCardSkeleton key={index} />)
          : featuredJobs.map((job) => <FeaturedJobCard key={job.sys.id} job={job} />)
        }
      </div>
    </div>
  )
}
