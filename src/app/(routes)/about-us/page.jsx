import { Fragment } from 'react';
import Reviews from '@/app/_components/About-us/reviews'

export default function AboutUs() {
  return (
    <Fragment>
      <div style={{backgroundImage: 'url(./images/background/about-us/main-2.jpg)', backgroundColor: '#021a2e'}} className='bg-no-repeat bg-cover bg-center'>
        <div className='py-24 container mx-auto'>
          <div className='w-2/3'>
            <h1 className='text-4xl xl:text-5xl text-white font-bold leading-tight xl:leading-snug'>
              Who we are & <br />
              Our mission
            </h1>
            <p className='mt-4 text-white font-medium'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
        </div>
      </div>
      <div className='container mx-auto py-16'>
        <Reviews />
      </div>
    </Fragment>
  )
}