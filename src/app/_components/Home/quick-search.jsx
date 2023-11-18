'use client'
import { Fragment } from 'react'
import { MdSearch, MdWorkOutline, MdLocationOn } from 'react-icons/md';
import {Select, SelectItem} from '@nextui-org/select';
import {Input} from "@nextui-org/input";

export default function QuickSearch(props) {
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
            <div className='w-96'>
                <Input
                    classNames={{
                        inputWrapper: 'bg-white rounded-none'
                    }}
                    size='lg'
                    type='text'
                    label=''
                    placeholder='Keywords'
                    startContent={
                        <MdSearch size={20} className='mr-1' />
                    }
                />
            </div>
            <div className='w-96'>
                <Select
                    label=''
                    size='lg'
                    placeholder='Select an industry'
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
            <div className='w-96'>
                <Select
                    label=''
                    size='lg'
                    placeholder='Select a location'
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
        </Fragment>
    )
}