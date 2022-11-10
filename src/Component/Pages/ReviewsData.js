import React from 'react';
import { BiEdit } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";

const ReviewsData = ({ row, handleDelete, setUpdateId }) => {

    const { ServiceName, time, date, feedback, _id } = row;

    const handleId = e => {
   
        setUpdateId(e)
       
    }

    return (

      
            <tr className="border-b border-opacity-20 dark:dark:border-gray-700 dark:dark:bg-gray-900">
                <td className="p-3 w-5">
                    <BiUserCircle />
                </td>
                <td className="p-3 w-80 ">
                    <p>{ServiceName}</p>
                </td>
                <td className="p-3 w-32 ">
                    <p>{time}</p>
                    <p className="dark:dark:text-gray-400">{date}</p>
                </td>
                <td className="p-3 ">
                    <p className=''>{
                        feedback ? feedback.slice(0, 180) : ''
                    }</p>
                </td>
                <td className="p-3 w-24">
                    <button  type="button" onClick={()=>handleId(_id)} className="">
                        <label htmlFor="my-modal-6" className="flex justify-end px-2 py-1 pl-0 cursor-pointer">
                            <BiEdit className='h-5 w-5' />
                            <span>Edit</span>
                        </label>
                    </button>


                </td>
                <td className="p-3  w-5">

                    <button type="button" onClick={() => handleDelete(_id)} className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect width="32" height="200" x="168" y="216"></rect>
                            <rect width="32" height="200" x="240" y="216"></rect>
                            <rect width="32" height="200" x="312" y="216"></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                    </button>

                </td>
            </tr>
            
        

    );
};

export default ReviewsData;