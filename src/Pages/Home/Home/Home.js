import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import CoursesHome from '../CoursesHome/CoursesHome';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <CoursesHome/>
            <About/>
        </div>
    );
};

export default Home;