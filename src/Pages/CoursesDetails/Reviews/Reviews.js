import React, { useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import Privateroute from '../../../Privateroute/Privateroute';

const Reviews = () => {
    const [reviewCard,setReviewCard] = useState(false);
    const handleReview = () =>{
        setReviewCard(true);
    }
    return (
        <div className='bg-rose-300 w-2/5 py-20' style={{backgroundImage:'url(https://i.ibb.co/xzVPv2j/g-clef-from-cassette-tape.jpg)',backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-4xl border-2 text-violet-600 p-2 bg-black border-violet-600 w-fit mx-auto rounded-lg'>Reviews</h1>
            <h1 className='text-6xl font-semibold text-black my-5'>No Review Added yet!</h1>
            <h2 onClick={handleReview} className='text-2xl font-light hover:text-violet-600 hover:text-4xl cursor-pointer'> Write a Review</h2>
            {reviewCard && 
            <ReviewCard/>
            }
        </div>
    );
};

export default Reviews;