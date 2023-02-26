import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCourses = () => {
    const choosenCourse = useLoaderData();
    console.log(choosenCourse);
    return (
        <div>
            My Courses
        </div>
    );
};

export default MyCourses;