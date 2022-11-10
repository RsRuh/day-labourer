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
                        <details className="group border-l-4 border-[#3F0071] bg-gray-50 p-6" >
                            <summary className="flex cursor-pointer items-center justify-between" >
                                <h2 className="text-lg font-medium text-gray-900" >
                                    What is JWT, and how does it work ?
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
                                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                                <br />
                                <br />
                                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key
                            </p >
                        </details >
                        
                        <details className="group border-l-4 border-[#3F0071] bg-gray-50 p-6" >
                            <summary className="flex cursor-pointer items-center justify-between" >
                                <h2 className="text-lg font-medium text-gray-900" >
                                    What is the difference between javascript and NodeJS ?
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
                                1. JavaScript is a client - side scripting language that is lightweight, cross - platform, and interpreted.Both Java and HTML include it.Node.js, on the other hand, is a V8 - based server - side programming language.
                                < br /> <br />
                                As a result, it is used to create network - centric applications.It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.
                                < br /> <br />
                                2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed.Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                                < br /> <br />
                                3. Any engine may run JavaScript.As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser.Node.js, on the other hand, only enables the V8 engine.Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                                < br /> <br />
                                4. A specific non - blocking operation is required to access any operating system.There are a few essential objects in JavaScript, but they are entirely OS - specific.
                            </p >
                        </details >
                        
                        <details className="group border-l-4 border-[#3F0071] bg-gray-50 p-6" >
                            <summary className="flex cursor-pointer items-center justify-between" >
                                <h2 className="text-lg font-medium text-gray-900" >
                                    How does NodeJS handle multiple requests at the same time ?
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
                                How NodeJS handle multiple client requests ? NodeJS receives multiple client requests and places them into EventQueue.NodeJS is built with the concept of event - driven architecture.NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                            </p >
                        </details >
                    </div >
                )
            }
        </div>

    );
};

export default Blog;