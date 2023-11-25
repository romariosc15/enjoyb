import { Fragment } from "react"
import Link from 'next/link'
import { isLastArrayValue } from "@/app/_utils/array"

export default function Breadcrumb(props) {
    const pathArray = props.path
    return (
    <div className='h-40 xl:h-48 flex flex-col px-4 xl:px-0'>
        <h1 className='text-4xl xl:text-5xl font-bold mt-auto mb-2 xl:mb-4 text-white'>Job browser</h1>
        <div className='mb-auto text-sm space-x-2 text-white'>
            {
                pathArray.map((value, index) => (
                    <Fragment key={index}>
                        <Link href={ value.path } className={ isLastArrayValue(index, pathArray) ? 'opacity-75' : ''}>
                            { value.name }
                        </Link>
                        { isLastArrayValue(index, pathArray) ? <span className='opacity-75'>/</span> : undefined }
                    </Fragment>
                ))
            }
        </div>
    </div>
    )
}