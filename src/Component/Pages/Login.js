import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitleHooks';
import { AuthContext } from '../AuthProvider/AuthProvider';



const Login = () => {
    useTitle('Login')

    const [error, setError] = useState('')


    const { login, GoogleLogin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                fetch(' https://youtube-promoter-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('labour-token', data.token);
                        toast.success('Successfully Login')
                        navigate(from, { replace: true });
                    });

            })
            .catch((error) => {
                setError(error.message.slice(22, 36));
            });

    }

    const handleGoogleLog = () => {
        GoogleLogin()
            .then((result) => {
                const Googleuser = result.user;

                const currentUserGoogle = {
                    email: Googleuser.email
                }
                fetch(' https://youtube-promoter-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUserGoogle)
                })
                    .then(res => res.json())
                    .then(data => {

                        localStorage.setItem('labour-token', data.token);
                        navigate(from, { replace: true });
                    });

            }).catch((error) => {

            });

    }

    return (
        <div
            className="py-5 flex flex-col items-center justify-center bg-gray-100"> <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Log in Now
                </div>
                <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                    Enter your credentials to get access account
                </div>

                <div className="mt-10">
                    <form onSubmit={handleLogin}>

                        <div className="flex flex-col mb-5">
                            <label htmlFor="email" className="mb-1 text-xs text-start tracking-wide text-gray-600">E-Mail Address:</label>
                            <div className="">
                                <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 " >
                                    <i className="fas fa-at text-blue-500"></i>
                                </div>

                                <input id="email" type="email" name="email" className=" text-sm placeholder-gray-500 pl-3 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 " placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="flex flex-col mb-6">
                            <label
                                htmlFor="password"
                                className="mb-1 text-xs sm:text-sm text-start tracking-wide text-gray-600">Password:</label>
                            <div className="">
                                <div className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400 " >
                                    <span>
                                        <i className="fas fa-lock text-blue-500"></i>
                                    </span>
                                </div>

                                <input id="password" type="password" name="password" className=" text-sm placeholder-gray-500 pl-3 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 " placeholder="Enter your password" />
                            </div>
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="flex w-full">
                            <button type="submit" className=" flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in " >
                                <span className="mr-2 uppercase">Log in</span>
                                <span>
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div>
                            <div className="flex items-center pt-4 space-x-1">
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                                <p className="px-3 text-sm dark:text-gray-400">Login with Google</p>
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button onClick={handleGoogleLog} aria-label="Log in with Google" className="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                </button>

                            </div>
                            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                                <Link to="/signup" className="underline dark:text-gray-100">Sign up</Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    );
};

export default Login;