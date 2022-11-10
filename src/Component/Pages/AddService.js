import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitleHooks';
import Loading from './Loading';

const AddService = () => {

    useTitle('Add Services')


    const [spinner, setSpinner] = useState(false);


    const handleServiceForm = event => {

        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const imgURL = form.imgURL.value;
        const details = form.details.value;


        const service = {
            name: serviceName,
            price: price,
            imgURL: imgURL,
            details: details
        }
        // console.log(service);



        fetch('https://youtube-promoter-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Successfully Added')
                    form.reset();
                }
            })

            .catch(er => console.error(er));

    }

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

                        <div className='grid md:grid-cols-3 gap-4'>
                            <div className='my-10'>
                                <p className='text-center text-5xl mt-5 font-semibold'>Hire skilled workers for the work you need, when you need it done.</p>
                                <p className='text-center mt-5 text-xl'>Find the best Worker services you need to help you successfully meet your project planning goals and deadline. A   description is similar to the About Page of a website. It appears under the tab  </p>
                            </div>
                            <div className='col-span-2'>
                                <section className='my-10'>
                                    <div className="relative mx-auto max-w-screen-2xl">
                                        <div>
                                            <div className=" dark:dark:bg-gray-800 border shadow dark:dark:text-gray-50 py-12 rounded-lg md:py-10">
                                                <h1 className='text-center text-3xl md:mb-20  font-bold mb-5'>Add More Service</h1>
                                                <div className="mx-auto px-4 lg:px-8">
                                                    <form onSubmit={handleServiceForm} className="grid grid-cols-6 gap-4">
                                                        <div className="col-span-3">
                                                            <label htmlFor="serviceName" className='text-sm ml-2 font-semibold'>Service Name</label>
                                                            <input
                                                                className="w-full shadow rounded-lg border p-2.5 pl-4 shadow-sm"
                                                                type="text"
                                                                id="serviceName"
                                                                name='serviceName'
                                                                placeholder='Service Name'
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-span-3">
                                                            <label htmlFor="price" className='text-sm ml-2   font-semibold'>Price</label>
                                                            <input
                                                                className="w-full shadow rounded-lg border  p-2.5 pl-4 shadow-sm"
                                                                type="number"
                                                                id="price"
                                                                name='price'
                                                                placeholder='Price'
                                                                required
                                                            />
                                                        </div>

                                                        <div className="col-span-6">
                                                            <label htmlFor="imgURL" className='text-sm ml-2 font-semibold'>ImageURL</label>
                                                            <input
                                                                className="w-full shadow rounded-lg border p-2.5 pl-4 shadow-sm"
                                                                type="text"
                                                                id="imgURL"
                                                                name='imgURL'
                                                                placeholder='Your ImageURL'
                                                                required
                                                            />

                                                        </div>

                                                        <div className='col-span-6'>
                                                            <textarea
                                                                className="w-full shadow rounded-lg border-2 p-3"
                                                                placeholder="Service Details"
                                                                rows="8"
                                                                name='details'
                                                                id="message"
                                                                required
                                                            ></textarea>
                                                        </div>

                                                        <div className="col-span-6 flex">

                                                            <button className="group shadow  mx-auto relative inline-block overflow-hidden border border-indigo-white rounded px-8 py-2 focus:outline-none focus:ring" type='submit'>
                                                                <span
                                                                    className="absolute inset-y-0 left-0 w-[2px] bg-[#FF3D55] transition-all group-hover:w-full group-active:bg-indigo"
                                                                ></span>

                                                                <span
                                                                    className="relative font-semibold transition-colors group-hover:text-white hover:text-semibold">
                                                                    Add Service
                                                                </span>

                                                            </button>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default AddService;