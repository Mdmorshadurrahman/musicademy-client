import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowReviews from '../Shared/ShowReviews/ShowReviews';

const MyReviews = () => {
    const individualReviews = useLoaderData();
    console.log(individualReviews)
    return (
        <div className='min-h-screen py-20' style={{backgroundImage:'url(https://i.ibb.co/cLT1m2J/eraser-pencil-notepad.jpg)',backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-4xl border-2 text-violet-600 p-2 bg-black border-violet-600 w-fit mx-auto rounded-lg'>My Reviews</h1>
            {individualReviews.length<1?<h1 className='text-6xl font-semibold text-black my-40 '>No Review Added yet!</h1>:
            <div>
                {
                    individualReviews.map(review =>
                        <ShowReviews
                        key={review._id}
                        review={review}
                        />
                        )
                }
            </div>
            }
        </div>
    );
};

export default MyReviews;