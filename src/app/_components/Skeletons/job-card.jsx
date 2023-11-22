import {Skeleton} from "@nextui-org/skeleton";

export default function JobCardSkeleton() {
    return (
        <div className='border border-default rounded-md px-6 py-6'>
            <div className='flex flex-row items-center'>
                <Skeleton className='w-14 h-14 rounded-full' />
                <div className='space-y-3 ml-4'>
                    <Skeleton className='w-14 h-3' />
                    <Skeleton className='w-24 h-3.5' />
                    <div className='flex flex-row gap-2'>
                        <Skeleton className='w-10 h-2.5' />
                        <Skeleton className='w-10 h-2.5' />
                        <Skeleton className='w-10 h-2.5' />
                    </div>
                </div>
                <div className='mx-auto flex flex-row items-center gap-4'>
                    <Skeleton className='w-8 h-8 rounded-full' />
                    <Skeleton className='w-20 h-6 rounded-md' />
                    <Skeleton className='w-20 h-6 rounded-md' />
                </div>
                <div className='flex flex-row gap-4'>
                    <Skeleton className='w-20 h-10 rounded-md' />
                    <Skeleton className='w-32 h-10 rounded-md' />
                </div>
            </div>
        </div>
    )
}