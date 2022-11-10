import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitleHooks';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Comment from './Comment';
import Loading from './Loading';

const Reviews = () => {

    useTitle('Details')
    const { user } = useContext(AuthContext);

    const cardInfo = useLoaderData();

    const navigate = useNavigate();


    const { price, name, imgURL, details, _id } = cardInfo;

    const [refresh, setRefresh] = useState(false);


    const [comments, setComments] = useState([]);


    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
        fetch(` https://youtube-promoter-server.vercel.app/reviews?id=${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [_id, refresh]);




    let today = new Date();
    let hours = today.getHours()
    let date = today.getDate()
    let month = today.getMonth()
    let year = today.getFullYear()
    if (hours > 12) {
        hours = hours - 12;
    }
    let minute = today.getMinutes()
    // console.log(hours, minute, second);




    const handleServiceForm = event => {

        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value.slice(0, 20);
        const email = form.email.value;
        const feedback = form.feedback.value.slice(0, 300);
        const photo = user?.photoURL;



        const review = {
            email: email,
            userName: userName,
            feedback: feedback,
            photo: photo,
            time: `${hours}:${minute}`,
            date: `${date}/${month}/${year}`,
            categoryId: _id,
            ServiceName: name

        }


        if (!user) {
            const proceed = window.confirm('Please Login First');

            if (proceed) {
                navigate('/login')
            }
            return
        }
        else {
            fetch(' https://youtube-promoter-server.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    setRefresh(!refresh)
                    if (data.acknowledged) {
                        toast.success('Thanks For Review')
                    }
                    form.reset();
                })
        }

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
                        <div>
                            <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
                                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                                    <img src={imgURL} alt="" className="w-full h-60 sm:h-96 bg-gray-500" />
                                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
                                        <div className="space-y-2">
                                            <p className="inline-block text-2xl font-semibold sm:text-3xl">{name}</p>
                                        </div>
                                        <div className="text-gray-100">
                                            <p>{details}</p>
                                        </div>
                                        <div>
                                            <p className='text-xl font-semibold'>Price: ${price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-3 gap-4'>
                                {
                                    comments.map(comment => <Comment
                                        key={comment?._id}
                                        comment={comment}
                                    ></Comment>)
                                }
                            </div>
                            <div className='md:w-2/3 mx-auto'>
                                <section className='my-10'>
                                    <div className="relative mx-auto max-w-screen-2xl">
                                        {
                                            user ?

                                                <div>
                                                    <div className=" dark:dark:bg-gray-800 dark:dark:text-gray-50 border shadow py-12 rounded-lg md:py-24">
                                                        <p className='text-center md:text-5xl font-bold mb-10'>Send Your Valuable Review</p>
                                                        <div className="mx-auto px-4 lg:px-8">
                                                            <form onSubmit={handleServiceForm} className="grid grid-cols-6 gap-4">
                                                                <div className='col-span-6'>
                                                                    <textarea
                                                                        className="w-full rounded-lg border shadow p-3"
                                                                        placeholder="Add Review *"
                                                                        rows="4"
                                                                        name='feedback'
                                                                        id="feedback"
                                                                        required

                                                                    ></textarea>
                                                                </div>
                                                                <div className="md:col-span-3 col-span-6">
                                                                    <label htmlFor="userName" className='text-sm ml-2   font-semibold'>User Name</label>
                                                                    <input
                                                                        className="w-full rounded-lg border shadow p-2.5 pl-4"
                                                                        type="text"
                                                                        id="userName"
                                                                        name='userName'
                                                                        placeholder='User Name'
                                                                        required
                                                                    />
                                                                </div>

                                                                <div className="md:col-span-3 col-span-6">
                                                                    <label htmlFor="email" className='text-sm ml-2   font-semibold'>Email</label>
                                                                    <input
                                                                        className="w-full rounded-lg border shadow p-2.5 pl-4 "
                                                                        type="email"
                                                                        id="email"
                                                                        name='email'
                                                                        value={user?.email}

                                                                        readOnly
                                                                    />
                                                                </div>

                                                                <div className="col-span-6">

                                                                    <button className="group mt-10 relative inline-block overflow-hidden border border-indigo-white rounded px-8 py-3 focus:outline-none focus:ring" type='submit'>
                                                                        <span
                                                                            className="absolute inset-y-0 left-0 w-[2px] bg-[#FF3D55]  transition-all group-hover:w-full group-active:bg-indigo"
                                                                        ></span>

                                                                        <span
                                                                            className="relative font-semibold transition-colors group-hover:text-white hover:text-semibold">
                                                                            Add Review
                                                                        </span>

                                                                    </button>

                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>


                                                :
                                                <section className="py-6 dark:dark:bg-gray-800 shadow border dark:dark:text-gray-50">
                                                    <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">Please Login to Add Review</h1>
                                                    <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                                                        <Link to='/login' className="px-8 rounded py-3 border shadow text-lg font-semibold dark:dark:bg-violet-400 dark:dark:text-gray-900">Log in</Link>
                                                    </div>

                                                </section>
                                        }


                                    </div>
                                </section>
                            </div>
                        </div>

                    )}
        </div>

    );
};

export default Reviews;