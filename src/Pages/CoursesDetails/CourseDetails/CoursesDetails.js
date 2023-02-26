import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from '../DetailsCard/DetailsCard';
import Reviews from '../Reviews/Reviews';

const CoursesDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div className='min-h-screen flex'>
            <DetailsCard
            key={details._id}
            details={details}
            />
            <Reviews/>
        </div>
    );
};

export default CoursesDetails;