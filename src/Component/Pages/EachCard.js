import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/EachCard.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const EachCard = ({ service }) => {
    const { price, name, details, imgURL, _id } = service;
    
    return (
        <article className="flex perCard flex-col dark:dark:bg-gray-900 shadow-lg"> 
            <PhotoProvider className='imgContainer'>
                <PhotoView src={imgURL}>
                    <img src={imgURL} alt="" />
                </PhotoView>
            </PhotoProvider>

            <div className="flex flex-col flex-1 p-6">
                <p className="tracking-wider hover:underline dark:dark:text-violet-400">{name}</p>
                <h3 className="text-sm flex-1 py-2  font-semibold leading-snug">
                {   
                    details ? details.slice(0, 100) : 'No Details '
                }
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 dark:text-gray-400">
                <p className='font-semibold'>Price: ${price}</p>
                    <Link to={`/services/${_id}`}
                        className="relative font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#FF3D54] before:transition hover:before:scale-100">
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default EachCard;