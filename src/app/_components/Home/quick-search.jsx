'use client'
import { useRouter } from 'next/navigation'
import { Fragment, useContext, useState, useEffect } from 'react'
import { MdSearch, MdWorkOutline, MdLocationOn } from 'react-icons/md';
import {Select, SelectItem} from '@nextui-org/select';
import { getIndustries, getJobTypes} from '@/actions/contentful'
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { AppContext } from "@/app/_providers/AppContext";

export default function QuickSearch() {
    const [industries, setIndustries] = useState([])
    const [areIndustriesLoading, setAreIndustriesLoading] = useState(true)
    const [industrySelect, setIndustrySelect] = useState(new Set([]))
    const [isValidIndustrySelect, setIsValidIndustrySelect] = useState(true)

    const [jobTypes, setJobTypes] = useState([])
    const [areJobTypesLoading, setAreJobTypesLoading] = useState(true)
    const [jobTypesSelect, setJobTypesSelect] = useState(new Set([]))
    const [isValidJobTypesSelect, setIsValidJobTypesSelect] = useState(true)

    const { setFilters } = useContext(AppContext)

    const router = useRouter()
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
            jobType: jobTypesSelect,
        })
    }, [industrySelect, jobTypesSelect, setFilters])

    const checkInputErrors = () => {
        let hasErrors = false
        if(industrySelect.size > 0) setIsValidIndustrySelect(true)
        else {
            setIsValidIndustrySelect(false)
            hasErrors = true
        }
        if(jobTypesSelect.size > 0) setIsValidJobTypesSelect(true)
        else {
            setIsValidJobTypesSelect(false)
            hasErrors = true
        }
        return hasErrors
    }

    const search = () => {
        const existsErrors = checkInputErrors()
        if(!existsErrors) {
            let parameters = ''
            if(industrySelect.size > 0) parameters += `?industry=${industrySelect.values().next().value}`
            if(jobTypesSelect.size > 0) parameters += `&job-type=${jobTypesSelect.values().next().value}`
            router.push(`/jobs${parameters}`)
        }   
    }
    return (
        <Fragment>
            <div className='w-80 px-4 xl:px-0'>
                <Input
                    className={`${!isValidIndustrySelect || !isValidJobTypesSelect ? 'mb-6' : ''}`}
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
                    className={`${isValidIndustrySelect && !isValidJobTypesSelect ? 'mb-6' : ''}`}
                    classNames={{
                        trigger: 'bg-white rounded-none border-x',
                    }}
                    startContent={
                        <MdWorkOutline size={20} className='mr-1' />
                    }
                    onSelectionChange={(value) => setIndustrySelect(value)}
                    selectionMode='single'
                    isDisabled={areIndustriesLoading}
                    errorMessage={isValidIndustrySelect ? '' : 'You must select one item'}
                    isInvalid={!isValidIndustrySelect}
                >
                    {industries.map((industry) => (
                        <SelectItem key={industry.fields.key} value={industry.fields.key}>
                            {industry.fields.name}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div className='w-64 px-4 xl:px-0'>
                <Select
                    label=''
                    size='lg'
                    placeholder='Select a job type'
                    aria-label='Select a job type'
                    className={`${!isValidIndustrySelect && isValidJobTypesSelect ? 'mb-6' : ''}`}
                    classNames={{
                        trigger: 'bg-white rounded-none',
                    }}
                    startContent={
                        <MdLocationOn size={20} className='mr-1' />
                    }
                    onSelectionChange={(value) => setJobTypesSelect(value)}
                    isDisabled={areJobTypesLoading}
                    errorMessage={isValidJobTypesSelect ? '' : 'You must select one item'}
                    isInvalid={!isValidJobTypesSelect}
                >
                    {jobTypes.map((jobType) => (
                        <SelectItem key={jobType.fields.key} value={jobType.fields.key}>
                            {jobType.fields.name}
                        </SelectItem>
                    ))}
                </Select>
            </div>
            <div>
                <Button onPress={search} size='lg' className={`bg-button-primary text-white p-2 rounded-l-none box-content font-medium ${!isValidIndustrySelect || !isValidJobTypesSelect ? 'mb-6' : ''}`}>
                    Search
                </Button>
            </div>
        </Fragment>
    )
}