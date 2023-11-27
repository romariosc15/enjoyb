'use client'
import { Fragment, useState, useEffect } from 'react';
import {Card, CardBody} from "@nextui-org/card";
import ReviewCardSkeleton from '@/app/_components/Skeletons/review-card-skeleton'
import { getReviews} from '@/actions/contentful'
import { MdOutlineStarBorder, MdOutlineStar } from "react-icons/md";

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] = useState(true)
    useEffect(() => {
        const fetchReviews = async () => {
            const response = await getReviews()
            setReviews(response)
            setReviewsLoading(false)
        }
        fetchReviews()
    }, [])
    return (
        <Fragment>
            <div className='flex flex-col justify-center items-center px-4 xl:px-0'>
                <h1 className='text-3xl xl:text-4xl font-bold text-title-primary'>Good reviews by customers</h1>
                <p className='mt-3 text-description-primary text-sm xl:text-base text-center'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                </p>
            </div>
            <div className='mt-8 grid grid-cols-1 xl:grid-cols-4 gap-5 px-4 xl:px-0'>
                {
                    reviewsLoading ? [...Array(4)].map((_, index) => <ReviewCardSkeleton key={`review-card-skeleton-${index}`} />)
                    : reviews.map((review) => (
                        <Card key={review.sys.id} className='p-2'>
                            <CardBody>
                                <div>
                                    <h2 className='text-lg font-bold text-title-primary'>{review.fields.title}</h2>
                                    <p className='text-sm mt-2 text-description-primary'>{review.fields.comment}</p>
                                </div>
                                <div className='mt-4 flex flex-row items-center'>
                                    <div>
                                        <p className='text-title-primary font-bold'>{review.fields.client}</p>
                                        <p className='text-success text-sm font-medium'>{review.fields.clientRole}</p>
                                    </div>
                                    <div className='ml-auto flex flex-row text-yellow-400'>
                                        {
                                            [...Array(review.fields.stars)].map((_, index) => <MdOutlineStar size={20} key={`star-${index}`} />)
                                        }
                                        {
                                            [...Array(5 - review.fields.stars)].map((_, index) => <MdOutlineStarBorder size={20} key={`empty-star-${index}`} />)
                                        }
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    ))
                }
            </div>
        </Fragment>
    )
}