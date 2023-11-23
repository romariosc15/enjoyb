import Link from 'next/link'
import {Skeleton} from "@nextui-org/skeleton";

export default function FeaturedJobCard(props) {
  return (
    <div className='border border-default rounded-md px-5 py-10'>
        <div className='flex flex-row gap-4 items-center'>
            <Skeleton className='w-12 h-12 rounded-md' />
            <div className='space-y-2'>
                <Skeleton className='w-20 h-3 rounded-md' />
                <Skeleton className='w-32 h-3.5 rounded-md' />
            </div>
        </div>
        <Skeleton className='w-full h-[100px] rounded-md mt-4' />
        <div className='flex flex-row gap-2 mt-4'>
            <Skeleton className='w-20 h-2.5' />
            <Skeleton className='w-20 h-2.5' />
            <Skeleton className='w-20 h-2.5' />
        </div>
        <div className='flex flex-row items-center justify-between mt-4'>
            <div className='flex flex-row gap-4 items-center'>
                <Skeleton className='w-20 h-6 rounded-md' />
                <Skeleton className='w-20 h-6 rounded-md' />
            </div>
            <Skeleton className='w-32 h-10 rounded-md' />
        </div>
    </div>
  )
}