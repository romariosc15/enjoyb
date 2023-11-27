"use server";

import { contentful } from '@/app/_libs/contentful'
import { contentfulContentTypes } from '@/app/_utils/mapping'

export async function getJobs(query = {}) {
    const tempQuery = {}
    const queryEntries = Object.entries(query)
    queryEntries.forEach((value) => {
        const toArray = Array.from(value[1])
        if(toArray.length > 0){
            tempQuery[`fields.${value[0]}.fields.key[in]`] = toArray.join(',')
        }
        tempQuery[`fields.${value[0]}.sys.contentType.sys.id`] = contentfulContentTypes[value[0]]
    })
    const response = await contentful.getEntries({
        content_type: 'jobs',
        ...tempQuery,
    });
    
    return response.items;
}

export async function getFeaturedJobs() {
    const response = await contentful.getEntries({
        content_type: 'jobs',
        'fields.isFeatured': 'true',
    });
    
    return response.items;
}

export async function getJobTypes() {
    const response = await contentful.getEntries({
        content_type: 'jobTypes',
    });
    
    return response.items;
}

export async function getIndustries() {
    const response = await contentful.getEntries({
        content_type: 'industries',
    });
    
    return response.items;
}

export async function getReviews() {
    const response = await contentful.getEntries({
        content_type: 'reviews',
    });
    
    return response.items;
}