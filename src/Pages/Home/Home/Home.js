import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <About/>
        </div>
    );
};

export default Home;