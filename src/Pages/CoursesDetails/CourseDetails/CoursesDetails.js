import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import DetailsCard from '../../Shared/DetailsCard/DetailsCard';

const CoursesDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div className='min-h-screen flex'>
            <DetailsCard
            key={details._id}
            details={details}
            />
            <Reviews
            details = {details}
            />
        </div>
    );
};

export default CoursesDetails;