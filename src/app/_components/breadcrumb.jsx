import { Fragment } from "react"
import Link from 'next/link'
import { isLastArrayValue } from "@/app/_utils/array"

export default function Breadcrumb(props) {
    const pathArray = props.path
    return (
    <div className='h-48 flex flex-col'>
        <h1 className='text-white text-5xl font-bold mt-auto mb-4'>Job browser</h1>
        <div className='text-white mb-auto text-sm space-x-2'>
            {
                pathArray.map((value, index) => (
                    <Fragment>
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