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
            
        </div>

    );
};

export default Blog;