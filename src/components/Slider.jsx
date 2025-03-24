import React from 'react';
import { nextSlide, prevSlide, dotSlide } from '../features/sliderSlice';
import { useSelector, useDispatch } from 'react-redux';
import { sliderData } from '../assets/data/data';



function Slider() {
    const sliderIndex = useSelector((state) => state.slider.value);
    console.log("slideIndex", sliderIndex);
    const dispatch = useDispatch();


    return (
        <div className='relative pb-4'>
            <div>
                {sliderData.map((item) => {
                    return (
                        <div key={item.id} className={parseInt(item.id) === sliderIndex
                            ? "opacity-100 duration-700 ease-in-out scale-100"
                            : "opacity-0 duration-700 ease-in-out scale-95"
                        }>
                            <div>
                                {parseInt(item.id) === sliderIndex && (
                                    <img className="h-lvh w-full" src={item.img} alt="shoes" />
                                )}
                            </div>
                            <div className='absolute top-40 mx-auto inset-x-1/4'>
                                <p className='text-white text-4xl font-inter font-bold tracking-normal'>
                                    {parseInt(item.id) === sliderIndex && item.text}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex flex-row absolute bottom-12 left-[45%]'>
                {sliderData.map((dot, index) => {
                    return (
                        <div className='mr-4' key={dot.id}>
                            <div className={
                                index === sliderIndex
                                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                                    : "bg-white rounded-full p-4 cursor-pointer"
                            }
                                onClick={() => dispatch(dotSlide(index))}
                            >

                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <button
                    className='cursor-pointer absolute top-[50%] left-5 bg-white rounded-full hover:bg-green-300'
                    onClick={() => dispatch(prevSlide(sliderIndex - 1))}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="size-6">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15.75 19.5 8.25 12l7.5-7.5" 
                        />
                    </svg>

                </button>
                <button
                    className='cursor-pointer absolute top-[50%] right-5 bg-white rounded-full hover:bg-green-300'
                    onClick={() => dispatch(nextSlide(sliderIndex + 1))}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round" 
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default Slider
