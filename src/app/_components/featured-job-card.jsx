import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineWatchLater, MdCalendarMonth, MdLocationOn } from 'react-icons/md';
export default function FeaturedJobCard(props) {
  console.log(props.job)
  return (
    <div className='border border-default rounded-md px-5 py-10'>
      <div className='flex flex-row space-x-4'>
        <Image
          className='w-12 h-12'
          width={48}
          height={48}
          src={`https:${props.job.fields.logo.fields.file.url}`}
          alt={props.job.fields.title}
        />
        <div className='text-left'>
          <p className='text-title-muted text-xs'>{ props.job.fields.company }</p>
          <Link href={`/jobs/detail/${props.job.sys.id}`} className='text-link-primary font-bold'>
              { props.job.fields.title }
          </Link>
        </div>
      </div>
      <p className='text-description-primary text-sm mt-4'>{ props.job.fields.summary }</p>
      <div className='space-x-2 mt-4 text-span-primary font-medium'>
        <span className='text-xs bg-span-primary py-1 px-2'><MdLocationOn className='inline-block align-sub' size={15} /> { props.job.fields.location }</span>
        <span className='text-xs bg-span-primary py-1 px-2'><MdOutlineWatchLater className='inline-block align-sub' size={15} /> { props.job.fields.jobType }</span>
        <span className='text-xs bg-span-primary py-1 px-2'><MdCalendarMonth className='inline-block align-sub' size={15} /> { props.job.fields.publicationDate }</span>
      </div>
      <div className='mt-10 flex flex-row justify-between items-center'>
          <span className='text-title-primary font-extrabold text-normal'>
              {`$${props.job.fields.minimumSalary} - $${props.job.fields.maximumSalary}`}
          </span>
          <button className='bg-button-primary text-white text-sm font-medium px-4 py-3 rounded-xl'>
            Aplicación rápida
          </button>
      </div>
    </div>
  )
}