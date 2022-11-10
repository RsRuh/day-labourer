import React from 'react';
import Lottie from "lottie-react";
import noFound2 from "../../assets/noFound2.json"
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div>
            <Lottie animationData={noFound2} loop={true} className="w-3/4 h-[700px] mx-auto" />

            <div className='w-full flex'>
                <Link to='/'
                    className="group mx-auto relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                    href="/download"
                >
                    <span
                        className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4"
                    >
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:ml-4" >
                        Download
                    </span >
                </Link >
            </div >
        </div >
    );
};

export default Error;