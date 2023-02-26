import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowReviews from '../Shared/ShowReviews/ShowReviews';

const MyReviews = () => {
    const individualReviews = useLoaderData();
    console.log(individualReviews)
    return (
        <div className='min-h-screen py-20' style={{backgroundImage:'url(https://img.freepik.com/free-photo/eraser-pencil-notepad_23-2147654436.jpg?w=1480&t=st=1677429664~exp=1677430264~hmac=1b187d06d1c40e6be8717ce6ac8d2be2ea2604b057c6e44ea59ec0a136ef2247)',backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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