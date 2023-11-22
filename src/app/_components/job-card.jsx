import Link from 'next/link'
import Image from 'next/image'
import { MdLocationOn, MdOutlineBrokenImage } from 'react-icons/md';
import { FaMoneyBillWave } from "react-icons/fa6";
import {Button} from "@nextui-org/button";

export default function JobCard(props) {
    return (
        <div className='border border-default rounded-md px-6 py-4'>
            <div className='flex flex-row items-center'>
                {
                    'logo' in props.job.fields ? 
                        <Image
                            className='w-12 h-12'
                            width={48}
                            height={48}
                            src={`https:${props.job.fields.logo.fields.file.url}`}
                            alt={props.job.fields.title}
                        />
                    : <MdOutlineBrokenImage className='w-12 h-12' />
                }
                <div className='ml-4 flex flex-col'>
                    <span className='text-xs w-fit font-medium bg-green-100 text-green-700 py-1 px-3 rounded-md'>{ props.job.fields.jobType.fields.name }</span>
                    <Link href={`/jobs/detail/${props.job.sys.id}`} className='text-link-primary text-lg font-bold mt-1'>
                        { props.job.fields.title }
                    </Link>
                    <div className='space-x-4 font-medium'>
                        <span className='text-description-alternative text-xs'>{ props.job.fields.company }</span>
                        <span className='text-description-alternative text-xs'><MdLocationOn className='inline-block align-sub' size={15} />{ props.job.fields.location }</span>
                        <span className='text-description-alternative text-xs'>{ props.job.fields.publicationDate }</span>
                    </div>
                </div>
                <div className='mx-auto gap-2 flex flex-row items-center'>
                    <div className='rounded-full flex flex-row bg-icon-primary items-center p-1.5'>
                        <FaMoneyBillWave className='inline-block align-sub text-white' size={20} />
                    </div>
                    <span className='text-title-primary font-extrabold text-xl'>
                        {`$${props.job.fields.minimumSalary}/yr - $${props.job.fields.maximumSalary}/yr`}
                    </span>
                </div>
                <div className='space-x-4'>
                    <Button href={`/jobs/detail/${props.job.sys.id}`} as={Link} className='bg-gray-alternative text-button-primary'>
                        Ver detalle
                    </Button>
                    <Button className='bg-button-primary text-white'>
                        Aplicación rápida
                    </Button>
                </div>
            </div>
        </div>
    )
}