'use client'
import { Fragment } from 'react'
import { MdSearch, MdWorkOutline, MdLocationOn } from 'react-icons/md';
import {Select, SelectItem} from '@nextui-org/select';
import {Card, CardBody} from "@nextui-org/card";

export default function WhatYouNeed() {
    const steps = [
        {id: 1, title: 'Search jobs', description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best. Nor again is there anyone who loves.`},
        {id: 2, title: 'Check position details', description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best. Nor again is there anyone who loves.`},
        {id: 3, title: 'Apply to job', description: `Post A Job To Tell Us About Your Project. We'll Quickly Match You With The Right Freelancers Find Place Best. Nor again is there anyone who loves.`}
    ]
    return (
        <Fragment>
            <div className='bg-section-alternative py-16'>
                <div className='container mx-auto'>
                    <div className='text-center'>
                        <h1 className='text-3xl xl:text-4xl font-bold text-title-primary'>Steps Our Working Process</h1>
                        <p className='mt-3 text-description-primary text-sm xl:text-base text-center'>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        </p>
                    </div>
                    <div className='mt-8 grid grid-cols-1 xl:grid-cols-3 gap-5'>
                        {
                            steps.map((step) => (
                                <Card key={`step-${step.id}`} className='p-2'>
                                    <CardBody>
                                        <div className='space-y-2'>
                                            <h1 className='text-4xl text-success font-extrabold'>{`0${step.id}.`}</h1>
                                            <h2 className='text-xl text-title-primary font-bold'>{step.title}</h2>
                                            <p className='text-sm text-description-alternative'>{step.description}</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}