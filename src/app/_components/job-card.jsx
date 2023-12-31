import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdLocationOn, MdOutlineBrokenImage } from 'react-icons/md'
import { FaMoneyBillWave } from "react-icons/fa6"
import {Button} from "@nextui-org/button"
import {Card, CardBody} from "@nextui-org/card"
import { AppContext } from "@/app/_providers/AppContext";

export default function JobCard(props) {
    const { openQuickApplyModal } = useContext(AppContext)
    return (
        <Card className='px-2 py-1'>
            <CardBody>
                <div className='grid grid-cols-5 xl:flex xl:flex-row items-center gap-y-4'>
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
                    <div className='xl:ml-4 col-span-4 flex flex-col'>
                        <span className='text-xs w-fit font-medium bg-green-100 text-green-700 py-1 px-3 rounded-md'>{ props.job.fields.jobType.fields.name }</span>
                        <Link href={`/jobs/detail/${props.job.sys.id}`} className='text-link-primary text-lg font-bold mt-1 hover:text-link-active transition-colors'>
                            { props.job.fields.title }
                        </Link>
                        <div className='space-x-4 font-medium'>
                            <span className='text-description-alternative text-xs'>{ props.job.fields.company }</span>
                            <span className='text-description-alternative text-xs'><MdLocationOn className='inline-block align-sub' size={15} />{ props.job.fields.location }</span>
                            <span className='text-description-alternative text-xs'>{ props.job.fields.publicationDate }</span>
                        </div>
                    </div>
                    <div className='mx-auto hidden xl:flex xl:flex-row xl:items-center xl:gap-2'>
                        <div className='rounded-full flex flex-row bg-icon-primary items-center p-[0.3125rem]'>
                            <FaMoneyBillWave className='inline-block align-sub text-white' size={14} />
                        </div>
                        <span className='text-title-primary font-black text-xl'>
                            {`$${props.job.fields.minimumSalary}/yr - $${props.job.fields.maximumSalary}/yr`}
                        </span>
                    </div>
                    <div className='space-x-4 col-span-5 text-center'>
                        <Button href={`/jobs/detail/${props.job.sys.id}`} as={Link} className='bg-gray-alternative text-button-primary'>
                            Ver detalle
                        </Button>
                        <Button onPress={() => openQuickApplyModal(props.job)} className='bg-button-primary text-white'>
                            Aplicación rápida
                        </Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}