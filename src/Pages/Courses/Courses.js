import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCards from '../Shared/CoursesCards/CourseCards';

const Courses = () => {
    const {coursesAll} = useLoaderData();
    console.log(coursesAll)
    return (
        <div className='mb-40 py-10' style={{ backgroundImage: `url("https://i.ibb.co/QHp0hfw/3d-render-retro-microphone-short-leg-stand-music-award-model-template-karaoke-radio-recording-studio.jpg")`,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-black text-6xl mb-2'>Courses</h1>
            <p className='text-gray-600 text--xl'>Follow your passion from this moment</p>
        <div className='mt-10 flex flex-row flex-wrap gap-20 w-8/12 mx-auto'>
            {
                coursesAll.map(course =>
                    <CourseCards
                    key={course._id}
                    course={course}
                    length={coursesAll.length}
                    />
                )
            }
        </div>
        </div>
    );
};

export default Courses;