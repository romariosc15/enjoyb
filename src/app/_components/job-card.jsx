import Link from 'next/link'
import Image from 'next/image'
export default function JobCard(props) {
    return (
      <div className='border border-default rounded-md px-6 py-10 text-center'>
        <div className='flex mb-4'>
          <Image
            className='mx-auto'
            src={`/images/companies/${props.job.logo}`}
            width={75}
            height={75}
            alt={props.job.name}
          />
        </div>
        <Link href={`/job/${props.job.id}`} className='text-link-primary font-bold'>
            { props.job.name }
        </Link>
        <p className='text-description-alternative text-sm'>{ props.job.description }</p>
        <div className='mt-10 flex flex-row justify-between items-center'>
            <span className='text-money-primary font-bold text-xl'>
                {`$${props.job.salaryMin} - $${props.job.salaryMax}`}
            </span>
            <button className='bg-button-primary text-white text-xs font-medium px-4 py-2 rounded-xl'>
              Aplicar
            </button>
        </div>
      </div>
    )
}