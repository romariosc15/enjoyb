import { Fragment } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { contentful } from '@/app/_libs/contentful';
import Link from 'next/link'
import { MdLocationOn } from 'react-icons/md';
import {Button} from "@nextui-org/button";

export default async function JobDetail(props) {
  const response = await contentful.getEntry(props.params.id);

  const job = response;
  return (
    <Fragment>
      <div className='bg-detail-primary text-white px-4 xl:px-0'>
        <div className='container mx-auto py-8'>
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
        </div>
      </div>
      <div className='bg-gray-alternative min-h-[600px] px-4 xl:px-0'>
        <div className='container mx-auto py-8 grid grid-cols-1 xl:grid-cols-3 gap-8'>
          <div className='bg-white border border-default rounded-md px-4 py-6 xl:col-span-2'>
            <div className='space-y-2'>
              <h3 className='text-xl xl:text-2xl font-bold text-title-primary'>Job description</h3>
              <div className='space-y-2 text-description-primary text-sm xl:text-base'>
                { documentToReactComponents(job.fields.description) }
              </div>
            </div>
          </div>
          <div className='bg-white border border-default rounded-md px-4 py-6 h-fit space-y-3'>
            <h2 className='text-xl xl:text-2xl font-bold text-title-primary'>¿Listo para aplicar?</h2>
            <p className='text-sm text-description-primary'>Primero responde las siguientes preguntas y luego envía tu aplicación a la empresa</p>
            <div className='text-sm text-description-primary'>
              <h5>¿Tienes autorización para trabajar en USA?</h5>
              <div className='space-x-4 mt-2'>
                <div className='inline-block space-x-1'>
                  <input type="radio" id="are-you-authorized-yes" name="are-you-authorized" />
                  <label htmlFor="are-you-authorized-yes">Yes</label>
                </div>
                <div className='inline-block space-x-1'>
                  <input type="radio" id="are-you-authorized-no" name="are-you-authorized" />
                  <label htmlFor="are-you-authorized-no">No</label>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <Button size='lg' className='bg-button-primary text-white font-medium'>
                Enviar aplicación
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}