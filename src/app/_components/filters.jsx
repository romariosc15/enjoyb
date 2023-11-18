'use client'
import { Fragment } from 'react';
import {Select, SelectItem} from "@nextui-org/select";
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
import {Slider} from "@nextui-org/slider";

export default function Filters(props) {
    const industries = [
        {label: 'Software development', value: 'software'},
        {label: 'Healthcare', value: 'healthcare'},
    ]
    const jobTypes = [
        {value: "full-time", label: 'Full-time'},
        {value: "part-time", label: 'Part-time'},
        {value: "contract", label: 'Contract'},
        {value: "temporary", label: 'Temporary'},
        {value: "internship", label: 'Internship'},
    ]
    return (
        <Fragment>
            <div className='py-4 px-6 border-b border-alternative'>
                <h1 className='text-xl font-bold text-title-primary'>Search filters</h1>
            </div>
            <div className='py-4 px-6 space-y-4'>
                <div className='space-y-2'>
                    <label className='text-lg font-medium text-label-primary' htmlFor="industry">Industry</label>
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
                <div>
                    <CheckboxGroup
                        label='Job type'
                        defaultValue={['full-time']}
                        classNames={{
                            label: 'text-lg font-medium text-label-primary',
                        }}
                        color='success'
                    >
                        {jobTypes.map((type) => (
                            <Checkbox classNames={{label: 'text-sm'}} key={type.value} value={type.value}>{type.label}</Checkbox>
                        ))}
                    </CheckboxGroup>
                </div>
                <div>
                    <Slider 
                        label="Salary range"
                        step={50} 
                        minValue={0} 
                        maxValue={300000} 
                        defaultValue={[0, 200000]} 
                        formatOptions={{style: "currency", currency: "USD"}}
                        color='success'
                        classNames={{
                            label: 'text-lg font-medium text-label-primary',
                        }}
                    />
                </div>
            </div>
        </Fragment>
    )
}

