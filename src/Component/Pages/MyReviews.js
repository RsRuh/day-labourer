import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReviewsData from './ReviewsData';
import Lottie from "lottie-react";
import noData from "../../assets/noData.json"
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitleHooks';
import Loading from './Loading';



const MyReviews = () => {

    useTitle('My Reviews')

    const { user, logOut } = useContext(AuthContext);

    const [updateId, setUpdateId] = useState();

    const [spinner, setSpinner] = useState(false);

    const [refresh, setRefresh] = useState(false);


    const [myReviews, setMyReviews] = useState([])

    useEffect(() => {
        fetch(`https://youtube-promoter-server.vercel.app/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('labour-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setMyReviews(data))
    }, [user?.email, logOut, refresh]);



    const handleDelete = id => {
        const proceed = window.confirm('Confirm to Delete');
        if (proceed) {
            fetch(`https://youtube-promoter-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success('Successfully Deleted')
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        if (updateId) {

            fetch(`https://youtube-promoter-server.vercel.app/reviews/${updateId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ feedback: message })
            })
                .then(data => {


                    if (data.modifiedCount > 0) {
                        const remaining = myReviews.filter(update => update._id !== updateId);
                        const approving = myReviews.find(update => update._id === updateId);
                        approving.feedback = message;

                        const newReview = [approving, ...remaining];
                        setMyReviews(newReview);
                    }

                    setRefresh(!refresh)
                    form.reset()
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

                        <div className="container p-2 mx-auto sm:p-4 dark:dark:text-gray-100">

                            <div className="overflow-x-auto">
                                {

                                    myReviews.length ?
                                        <table className="min-w-full">

                                            <thead className="dark:dark:bg-gray-700">
                                                <tr className="text-left">
                                                    <th className="p-3"></th>
                                                    <th className="p-3">Service Name</th>
                                                    <th className="p-3">Date</th>
                                                    <th className="p-3">Review</th>
                                                    <th className="p-3">Edit</th>
                                                    <th className="p-3">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    myReviews.map(row => <ReviewsData
                                                        key={row._id}
                                                        row={row}
                                                        handleDelete={handleDelete}
                                                        setUpdateId={setUpdateId}
                                                    ></ReviewsData>)

                                                }
                                            </tbody>
                                        </table>
                                        :
                                        <div>
                                            <h1 className='text-5xl text-center font-semibold'>Please Add Some Review</h1>
                                            <Lottie animationData={noData} loop={true} className="w-[530px] mx-auto" />
                                        </div>
                                }
                            </div>
                            <form onSubmit={handleUpdate}>
                                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:dark:bg-gray-900 dark:dark:text-gray-100 border">
                                            <div className="flex flex-col items-center w-full">
                                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                                <div className="flex flex-col items-center py-6 space-y-3">
                                                    <span className="text-center">How was your experience?</span>

                                                </div>
                                                <div className="flex flex-col w-full">
                                                    <textarea rows="3" placeholder="Review..." name='message' className="p-4 rounded-md resize-none shadow border dark:dark:text-gray-100 dark:dark:bg-gray-900"></textarea>
                                                    <div className="modal-action">
                                                        <button type='submit'>
                                                            <label htmlFor="my-modal-6" className='py-2 px-4 my-8 font-semibold rounded-md dark:dark:text-gray-900 border dark:dark:bg-violet-400'>Save</label>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
            }

        </div>
    );
};

export default MyReviews;