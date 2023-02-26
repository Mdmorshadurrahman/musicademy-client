import React, { useContext, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import { AuthContext } from '../../../context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';
import ShowReviews from '../../Shared/ShowReviews/ShowReviews';

const Reviews = ({details}) => {
    const [reviews,setReviews] = useState([]);
    const {user} = useContext(AuthContext);
    const [reviewCard,setReviewCard] = useState(false);
    const navigate = useNavigate();
    console.log(reviews)
    useEffect(()=>{
        fetch('http://localhost:5000/myreviews')
        .then(res=>res.json())
        .then(data => setReviews(data))
    },[]);
    const reviewFIltered = reviews.filter(review => details.course_id==review.course_id);
    const handleReview = () =>{
        if(user){
        setReviewCard(true);
        }
        else{
            alert('Log in to post a review and more!')
            navigate('/login')
        }
        
    }
    return (
        <div className='bg-rose-300 w-2/5 py-20' style={{backgroundImage:'url(https://i.ibb.co/xzVPv2j/g-clef-from-cassette-tape.jpg)',backgroundSize: 'cover',backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-4xl border-2 text-violet-600 p-2 bg-black border-violet-600 w-fit mx-auto rounded-lg'>Reviews</h1>
            {reviewFIltered.length<1?<h1 className='text-6xl font-semibold text-black my-5'>No Review Added yet!</h1>
            :reviewFIltered.map(review =>
                <ShowReviews 
                key={review._id}
                review={review}
            />
            )}
            <h2 onClick={handleReview} className='text-2xl font-light hover:text-violet-600 hover:text-4xl cursor-pointer'> Write a Review</h2>
            {reviewCard && user && 
            <ReviewCard details = {details}/>
            }
        </div>
    );
};

export default Reviews;