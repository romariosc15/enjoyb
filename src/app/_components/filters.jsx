'use client'
import { Fragment } from 'react';
import {Select, SelectItem} from "@nextui-org/select";

export default function Navbar(props) {
    const industries = [
        {label: 'Software development', value: 'software', description: 'The most popular pet in the world'},
        {label: 'Healthcare', value: 'healthcare', description: 'The most popular pet in the world'}
    ]
    return (
        <Fragment>
            <div className='py-4 px-6 border-b border-alternative'>
                <h1 className='text-xl font-bold text-title-primary'>Search filters</h1>
            </div>
            <div className='py-4 px-6'>
                <div className='space-y-2'>
                    <label className='text-lg font-medium text-label-primary' htmlFor="job-category">Industry</label>
                    <Select
                        label='Select an industry'
                        placeholder=''
                        className=''
                        classNames={{
                            trigger: 'bg-white',
                        }}
                    >
                        {industries.map((industry) => (
                            <SelectItem key={industry.value} value={industry.value}>
                                {industry.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
        </Fragment>
    )
}

