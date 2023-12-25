'use client'
import { Fragment, useState, useEffect } from 'react'
import ScreenLoader from '@/app/_components/screen-loader'
import { getJobDetail } from '@/actions/contentful'
import { renderJobDescription } from '@/app/_libs/contentful-rich-text'
import Link from 'next/link'
import {RadioGroup, Radio} from "@nextui-org/radio"
import { MdLocationOn, MdWorkHistory } from 'react-icons/md'
import { GiSwapBag } from "react-icons/gi";
import {Button} from "@nextui-org/button"
import {Card, CardBody} from "@nextui-org/card";

export default function JobDetail(props) {
  const [isAuthorizedToWork, setAuthorizedToWork] = useState('')
  const [isJobDetailLoading, setIsJobDetailLoading] = useState(true)
  const [job, setJob] = useState({})
  useEffect(() => {
    const fetchJobDetail = async (id) => {
      const response = await getJobDetail(id)
      setJob(response)
      setIsJobDetailLoading(false)
    }
    fetchJobDetail(props.params.id)
  }, [])
  return (
    <Fragment>
      {
        isJobDetailLoading ? <ScreenLoader />
        :
        <Fragment>
          <div className='bg-detail-primary text-white px-4 xl:px-0'>
            <div className='container mx-auto py-12'>
              <div className='text-sm space-x-2 mb-8'>
                <Link href='/' className='opacity-75'>
                  Home
                </Link>
                <span className='opacity-75'>/</span>
                <Link href='/jobs' className='opacity-75'>
                  Jobs
                </Link>
                <span className='opacity-75'>/</span>
                <span>{ job.fields.title }</span>
              </div>
              <div className='space-y-2'>
                <span className='text-xs w-fit font-medium bg-lime-600 text-white py-1.5 px-3 rounded-md'>{ job.fields.jobType.fields.name }</span>
                <h1 className='text-3xl font-bold'>{ job.fields.title }</h1>
                <span className='text-xs'>
                  <MdLocationOn className='inline-block align-sub mr-1' size={15} />
                  { job.fields.location }
                </span>
              </div>
              <p className='text-sm mt-4'>{ job.fields.summary }</p>
              <div className='mt-4 flex flex-row gap-8'>
                <div className='flex flex-row items-center gap-2'>
                  <MdWorkHistory className='inline-block align-sub fill-link-active' size={40} />
                  <div>
                    <span className='text-sm opacity-75'>Industry</span>
                    <p className='font-bold'>{ job.fields.industry.fields.name }</p>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <MdLocationOn className='inline-block align-sub fill-link-active' size={40} />
                  <div>
                    <span className='text-sm opacity-75'>Location</span>
                    <p className='font-bold'>{ job.fields.location }</p>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <GiSwapBag className='inline-block align-sub fill-link-active' size={40} />
                  <div>
                    <span className='text-sm opacity-75'>Salary</span>
                    <p className='font-bold'>{ `$${job.fields.minimumSalary} - $${job.fields.maximumSalary}` }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-alternative min-h-[600px] px-4 xl:px-0'>
            <div className='container mx-auto py-12 grid grid-cols-1 xl:grid-cols-3 gap-8'>
              <Card className='px-2 py-2 xl:col-span-2'>
                <CardBody className='space-y-2'>
                  <h3 className='text-xl xl:text-2xl font-bold text-title-primary'>Job description</h3>
                  <div className='space-y-2 text-description-primary text-sm xl:text-base'>
                    { renderJobDescription(job.fields.description) }
                  </div>
                </CardBody>
              </Card>
              <Card className='px-4 py-6 h-fit space-y-3'>
                <CardBody className='space-y-2'>
                  <h2 className='text-xl xl:text-2xl font-bold text-title-primary'>¿Listo para aplicar?</h2>
                  <p className='text-sm text-description-primary'>Primero responde las siguientes preguntas y luego envía tu aplicación a la empresa</p>
                  <div className='text-sm text-description-primary'>
                    <div className='space-x-4 mt-2'>
                      <RadioGroup
                        classNames={{
                          label: 'text-description-primary',
                        }}
                        label="¿Tienes autorización para trabajar en USA?"
                        value={isAuthorizedToWork}
                        onValueChange={setAuthorizedToWork}
                      >
                        <Radio classNames={{
                          label: 'text-description-primary text-sm',
                        }} value="yes">Si</Radio>
                        <Radio classNames={{
                          label: 'text-description-primary text-sm',
                        }} value="no">No</Radio>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className='text-center'>
                    <Button href={`mailto:${job.fields.email}?Subject=${job.fields.title}%20-%20Enjoyb&Body=Is%20authorized%20to%20work%20in%20USA?%20${isAuthorizedToWork.toUpperCase()}`} as={Link} className='bg-button-primary text-white font-medium' isDisabled={isAuthorizedToWork === ''}>
                      Enviar aplicación
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </Fragment>
      }
    </Fragment>
  )
}