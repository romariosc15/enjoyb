import Link from 'next/link'
import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md';
import { FaMoneyBillWave } from "react-icons/fa6";
export default function JobCard(props) {
    return (
        <div className='border border-default rounded-md px-6 py-6'>
            <div className='flex flex-row items-center'>
                <Image
                    className='w-12 h-12'
                    width={48}
                    height={48}
                    src={`/images/companies/${props.job.logo}`}
                    alt={props.job.name}
                />
                <div className='ml-4 flex flex-col'>
                    <span className='text-xs w-fit font-medium bg-green-100 text-green-700 py-1 px-2'>{ props.job.typeOfContract }</span>
                    <Link href={`/jobs/detail/${props.job.id}`} className='text-link-primary text-lg font-bold mt-1'>
                        { props.job.name }
                    </Link>
                    <div className='space-x-4 font-medium'>
                        <span className='text-description-alternative text-xs'>{ props.job.company }</span>
                        <span className='text-description-alternative text-xs'><MdLocationOn className='inline-block align-sub' size={15} />{ props.job.location }</span>
                        <span className='text-description-alternative text-xs'>{ props.job.date }</span>
                    </div>
                </div>
                <div className='mx-auto space-x-2 flex flex-row items-center'>
                    <div className='rounded-full flex flex-row bg-icon-primary items-center p-1.5'>
                        <FaMoneyBillWave className='inline-block align-sub text-white' size={20} />
                    </div>
                    <span className='text-title-primary font-extrabold text-xl'>
                        {`$${props.job.salaryMin}/yr - $${props.job.salaryMax}/yr`}
                    </span>
                </div>
                <div className='ml-auto space-x-4'>
                    <Link href={`/jobs/detail/${props.job.id}`}>
                        <button className='bg-button-alternative text-button-primary text-sm font-medium px-4 py-3 rounded-xl'>
                            Ver detalle
                        </button>
                    </Link>
                    <button className='bg-button-primary text-white text-sm font-medium px-4 py-3 rounded-xl'>
                        Aplicación rápida
                    </button>
                </div>
            </div>
        </div>
    )
}