import React from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import '../Banner/Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousel-img w-full'>
                    <img src="https://i.ibb.co/D8XYBDv/man-studying-home-during-music-online-courses.jpg" className="w-full" />
                    </div>
                    <div  className="absolute flex justify-between transform -translate-y-1/2 left-40 right-5 top-1/4">
                        <h1 className='font-medium text-6xl text-white'>
                           Start Your Musical<br /> Journey & <br />Be a Pro <br /> in <span className='text-violet-600'>NO TIME!!!</span>  
                        </h1>
                    </div>
                    <div  className="absolute flex flex-col justify-between transform -translate-y-1/2 left-40 right-5 top-1/2">
                        <p className='text-2xl text-white w-2/5 mb-5'>
                            Lots of varity in course selection,flexible lesson time, Learn from The Expert
                        </p>
                        <button className='w-2/5 text-5xl border-2 border-black hover:bg-violet-600 py-5 rounded-lg hover:text-white'>Enroll</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3"><BsArrowLeftCircle className='text-5xl hover:bg-violet-600 hover:rounded-full hover:text-black text-white'></BsArrowLeftCircle></a> 
                        <a href="#slide2"><BsArrowRightCircle className='text-5xl hover:bg-violet-600 hover:rounded-full hover:text-black text-white'></BsArrowRightCircle></a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='carousel-img w-full'>
                    <img src="https://i.ibb.co/4ZkxkfN/medium-shot-woman-making-music.jpg" className="w-full" />
                    </div>
                    <div  className="w-2/5 absolute flex justify-between transform -translate-y-1/2 left-40 right-5 top-1/4">
                        <h1 className='font-light text-6xl text-white'>
                        “Music is the universal language of mankind.”<br /> 
                        </h1>
                    </div>
                    <div  className="absolute flex flex-col justify-between transform -translate-y-1/2 left-48 right-5 bottom-2/4">
                        <p className='text-5xl text-white font-light w-2/5'>
                        – Henry Wadsworth Longfellow 
                        </p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1"><BsArrowLeftCircle className='text-5xl hover:bg-violet-600 hover:rounded-full hover:text-black text-white'></BsArrowLeftCircle></a> 
                    <a href="#slide3"><BsArrowRightCircle className='text-5xl hover:bg-violet-600 hover:rounded-full hover:text-black text-white'></BsArrowRightCircle></a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full"> 
                    <div className='carousel-img w-full'>
                    <img src="https://i.ibb.co/hcJrcNH/latin-girl-with-headphones-listening-her-online-music-lessons-artistic-kid-playing-acoustic-guitar-l.jpg" className="w-full" />
                    </div>
                    <div  className="w-2/5 absolute flex justify-between transform -translate-y-1/2 left-40 right-5 top-1/4">
                        <h1 className='font-light text-6xl text-white'>
                        “If music be the food of love, play on.”<br /> 
                        </h1>
                    </div>
                    <div  className="absolute flex flex-col justify-between transform -translate-y-1/2 left-48 right-5 bottom-2/4">
                        <p className='text-5xl text-white font-light w-2/5'>
                        – William Shakespeare
                        </p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2"><BsArrowLeftCircle className='text-5xl hover:bg-violet-600 hover:rounded-full hover:text-black text-white'></BsArrowLeftCircle></a> 
                    <a href="#slide1"><BsArrowRightCircle className='text-5xl hover:bg-violet-600 hover:rounded-full hover:text-black text-white'></BsArrowRightCircle></a>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Banner;