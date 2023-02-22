import React from 'react';

const About = () => {
    return (
        <div className='my-40'>
            <div className="hero h-80" style={{ backgroundImage: `url("https://i.ibb.co/WBJv1p3/boy-with-ukelele-front-fountain.jpg")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Meet The Expert</h1>
                    <p className="mb-5">A young musical expert who is also an excellent choice for a private music teacher.</p>
                    <button className="p-5 rounded-lg border-2 hover:text-white text-black border-black hover:bg-violet-600 ">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;