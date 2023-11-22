import {Skeleton} from "@nextui-org/skeleton";

export default function CheckboxGroupSkeleton() {
    return (
        <div className='space-y-2'>
            {
                [...Array(5)].map((_, index) => (
                    <div className='flex flex-row gap-2 items-center' key={`job-card-skeleton-${index}`}>
                        <Skeleton className='w-5 h-5 rounded-md' />
                        <Skeleton className='w-20 h-3 rounded-md' />
                    </div>
                ))
            }
        </div>
    )
}