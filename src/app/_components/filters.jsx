'use client'
import { Fragment, useContext, useEffect, useState } from 'react';
import {Select, SelectItem} from "@nextui-org/select";
import {CheckboxGroup, Checkbox} from "@nextui-org/checkbox";
import {Slider} from "@nextui-org/slider";
import {Button} from "@nextui-org/button";
import { AppContext } from "@/app/_providers/AppContext";
import { getJobTypes, getIndustries} from '@/actions/contentful'
import CheckboxGroupSkeleton from '@/app/_components/Skeletons/checkbox-group'

export default function Filters() {
    const [industries, setIndustries] = useState([])
    const [areIndustriesLoading, setAreIndustriesLoading] = useState(true)
    const [jobTypes, setJobTypes] = useState([])
    const [areJobTypesLoading, setAreJobTypesLoading] = useState(true)
    const { setFilters } = useContext(AppContext)

    const [industrySelect, setIndustrySelect] = useState(new Set([]))
    const [jobTypesCheckboxes, setJobTypesCheckboxes] = useState([])

    useEffect(() => {
        const fetchIndustries = async () => {
            const response = await getIndustries()
            setIndustries(response)
            setAreIndustriesLoading(false)
        }
        const fetchJobTypes = async () => {
            const response = await getJobTypes()
            setJobTypes(response)
            setAreJobTypesLoading(false)
        }
        fetchIndustries()
        fetchJobTypes()
    }, [])

    useEffect(() => {
        setFilters({
            industry: industrySelect,
            jobType: jobTypesCheckboxes,
        })
    }, [industrySelect, jobTypesCheckboxes, setFilters])

    const clearFilters = () => {
        setIndustrySelect(new Set([]))
        setJobTypesCheckboxes([])
        setFilters({})
    }

    return (
        <Fragment>
            <div className='py-2.5 px-4 xl:px-6 border-b border-alternative flex justify-between items-center'>
                <h1 className='text-xl font-bold text-title-primary'>Search filters</h1>
                <Button
                    className='text-gray-600'
                    onPress={() => clearFilters()}
                    color='default'
                    variant='light'
                >
                    Clear filters
                </Button>
            </div>
            <div className='py-6 px-4 xl:px-6 space-y-4'>
                <div className='space-y-2'>
                    <label className='text-lg font-medium text-label-primary' htmlFor="industry">Industry</label>
                    <Select
                        label='Select an industry'
                        placeholder=''
                        className=''
                        classNames={{
                            trigger: 'bg-white',
                        }}
                        selectedKeys={industrySelect}
                        onSelectionChange={(value) => setIndustrySelect(value)}
                        selectionMode='single'
                        isDisabled={areIndustriesLoading}
                    >
                        {industries.map((industry) => (
                            <SelectItem key={industry.fields.key} value={industry.fields.key}>
                                {industry.fields.name}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className='space-y-2'>
                    <label className='text-lg font-medium text-label-primary' htmlFor="jobType">Job type</label>
                    {
                        areJobTypesLoading ? <CheckboxGroupSkeleton />
                        :
                        <CheckboxGroup
                            defaultValue={[]}
                            color='success'
                            value={jobTypesCheckboxes}
                            onValueChange={(value) => setJobTypesCheckboxes(value)}
                        >
                            {jobTypes.map((type) => (
                                <Checkbox classNames={{label: 'text-sm'}} key={type.fields.key} value={type.fields.key}>{type.fields.name}</Checkbox>
                            ))}
                        </CheckboxGroup>
                    }
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

