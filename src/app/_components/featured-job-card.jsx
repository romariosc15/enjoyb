import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineWatchLater, MdCalendarMonth, MdLocationOn } from 'react-icons/md';
export default function FeaturedJobCard(props) {
    return (
      <div className='border border-default rounded-md px-5 py-10'>
        <div className='flex flex-row space-x-4'>
          <Image
            src={`/images/companies/${props.job.logo}`}
            width={40}
            height={40}
            alt={props.job.name}
          />
          <div className='text-left'>
            <p className='text-title-muted text-xs'>{ props.job.company }</p>
            <Link href={`/jobs/detail/${props.job.id}`} className='text-link-primary font-bold'>
                { props.job.name }
            </Link>
          </div>
        </div>
        <p className='text-description-primary text-sm mt-4'>{ props.job.description }</p>
        <div className='space-x-2 mt-4 text-span-primary font-medium'>
          <span className='text-xs bg-span-primary py-1 px-2'><MdLocationOn className='inline-block align-sub' size={15} /> { props.job.location }</span>
          <span className='text-xs bg-span-primary py-1 px-2'><MdOutlineWatchLater className='inline-block align-sub' size={15} /> { props.job.typeOfContract }</span>
          <span className='text-xs bg-span-primary py-1 px-2'><MdCalendarMonth className='inline-block align-sub' size={15} /> { props.job.date }</span>
        </div>
        <div className='mt-10 flex flex-row justify-between items-center'>
            <span className='text-title-primary font-extrabold text-normal'>
                {`$${props.job.salaryMin} - $${props.job.salaryMax}`}
            </span>
            <button className='bg-button-primary text-white text-sm font-medium px-4 py-3 rounded-xl'>
              Aplicación rápido
            </button>
        </div>
      </div>
    )
}