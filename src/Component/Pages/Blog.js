import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import think from "../../assets/think.json"
import useTitle from '../../hooks/useTitleHooks';
import Loading from './Loading';


const Blog = () => {
    useTitle('Blog')

    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        setTimeout(() => {
            setSpinner(false);
        }, 10);
    }, []);



    return (
        <div>
            {
                spinner ? (<Loading></Loading>) : (
                    <div className="space-y-4 my-5" >

                        <details className="group border-l-4 border-[#3F0071] bg-gray-50 p-6" >
                            <summary className="flex cursor-pointer items-center justify-between" >
                                <h2 className="text-lg font-medium text-gray-900" >
                                    What is Difference between SQL and NoSQL ?
                                </h2 >


                                <span
                                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg >
                                </span >
                            </summary >

                            <p className="mt-4 leading-relaxed text-gray-700" >
                                SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non - relational and generally do not use SQL.
                            </p >
                        </details >

                    
                    </div >
                )
            }
        </div>

    );
};

export default Blog;