import {Skeleton} from "@nextui-org/skeleton";
import {Card, CardBody} from "@nextui-org/card";

export default function JobCardSkeleton() {
    return (
        <Card className='p-2'>
            <CardBody>
                <Skeleton className='w-48 h-4 rounded-md' />
                <Skeleton className='w-full h-16 rounded-md mt-4' />
                <div className='mt-4 flex flex-row items-center'>
                    <div>
                        <Skeleton className='w-32 h-4 rounded-md' />
                        <Skeleton className='w-28 h-3 rounded-md mt-2' />
                    </div>
                    <Skeleton className='w-32 h-3.5 rounded-md ml-auto' />
                </div>
            </CardBody>
        </Card>
    )
}