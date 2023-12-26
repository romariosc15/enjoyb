'use client'
import { Fragment } from 'react'
import { MdSearch, MdWorkOutline, MdLocationOn } from 'react-icons/md';
import {Select, SelectItem} from '@nextui-org/select';
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function QuickSearch() {
    const industries = [
        {label: 'Software development', value: 'software'},
        {label: 'Healthcare', value: 'healthcare'},
    ]
    const locations = [
        {label: 'Tacna', value: 'tacna'},
        {label: 'Moquegua', value: 'moquegua'},
    ]
    return (
        <Fragment>
            <div className='w-80 px-4 xl:px-0'>
                <Input
                    classNames={{
                        inputWrapper: 'bg-white rounded-r-none'
                    }}
                    size='lg'
                    type='text'
                    label=''
                    aria-label='Search by keywords'
                    placeholder='Search by keywords'
                    startContent={
                        <MdSearch size={20} className='mr-1' />
                    }
                />
            </div>
            <div className='w-64 px-4 xl:px-0'>
                <Select
                    label=''
                    size='lg'
                    placeholder='Select an industry'
                    aria-label='Select an industry'
                    className=''
                    classNames={{
                        trigger: 'bg-white rounded-none border-x',
                    }}
                    startContent={
                        <MdWorkOutline size={20} className='mr-1' />
                    }
                >
                    {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                            {industry.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className='w-64 px-4 xl:px-0'>
                <Select
                    label=''
                    size='lg'
                    placeholder='Select a location'
                    aria-label='Select a location'
                    className=''
                    classNames={{
                        trigger: 'bg-white rounded-none',
                    }}
                    startContent={
                        <MdLocationOn size={20} className='mr-1' />
                    }
                >
                    {locations.map((location) => (
                        <SelectItem key={location.value} value={location.value}>
                            {location.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div>
                <Button size='lg' className='bg-button-primary text-white p-2 rounded-l-none box-content font-medium'>
                    Search
                </Button>
            </div>
        </Fragment>
    )
}