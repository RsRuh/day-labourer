import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import EachCard from './EachCard';
import '../Styles/Home.css'
import HomeDownPart from './HomeDownPart';
import useTitle from '../../hooks/useTitleHooks';
import Loading from './Loading';

const Home = () => {
    useTitle('Home')


    const services = useLoaderData();

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
                spinner ? (
                    <Loading></Loading>
                )
                    :
                    (
                        <div>
                            <div className="py-5">
                                <div className=' md:p-10 my-5 banner-section'>
                                    <div>
                                        <h1 className="md:text-5xl textTitle text-3xl font-bold  text-white sm:w-auto w-64">
                                            Get The Best <span className='text-[#FF3D54]'>Worker</span> Services
                                        </h1>
                                        <p className="text-lg  text-white textTitle xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                                            Find the best <span className='text-[#FF3D54]'>Day Labour</span> services you need to help you successfully meet your work done and planning goals and deadline
                                        </p>
                                    </div>
                                    <div className="md:mt-12 mt-20">
                                        <button className="text-base font-medium leading-4 text-white bg-[#FF3D54] sm:w-auto w-full rounded p-4 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-white">
                                            Contact me
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <section className="py-6 sm:py-12 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                                    <div className="container p-6 mx-auto space-y-8">
                                        <div className="space-y-2 text-center">
                                            <h2 className="text-3xl font-bold">Find the best Worker services</h2>
                                            <p className="font-serif text-sm dark:dark:text-gray-400">you need to help you successfully meet your work complete with planning goals and deadline</p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                                            {
                                                services.map(service => <EachCard
                                                    key={service._id}
                                                    service={service}
                                                ></EachCard>)
                                            }
                                        </div>
                                        <div className="flex  justify-center">
                                            <Link to='/services'
                                                className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"

                                            >
                                                <span
                                                    className="absolute inset-0 border border-red-600 group-active:border-red-500"
                                                ></span>
                                                <span
                                                    className="block border border-red-600 bg-red-600 px-6 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                                >
                                                    Load more services...
                                                </span>
                                            </Link>

                                        </div>
                                    </div>
                                </section>
                            </div>
                            <HomeDownPart></HomeDownPart>
                        </div>
                    )
            }

        </div>
    );
};

export default Home;