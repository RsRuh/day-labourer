import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachCard from './EachCard';

const Services = () => {
    const allServices = useLoaderData()


    return (
        <section className="py-6 sm:py-12 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                    <div className="container p-6 mx-auto space-y-8">
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold">Find the best Day Labour services</h2>
                            <p className="font-serif text-sm dark:dark:text-gray-400">The Service allows you to discover, watch and share videos and other content, provides a forum for people to connect,</p>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                            {
                                allServices.map(service => <EachCard
                                    key={service._id}
                                    service={service}
                                ></EachCard>)
                            }
                        </div>
                        <div className="flex  justify-center">
                        </div>
                    </div>
                </section>
    );
};

export default Services;