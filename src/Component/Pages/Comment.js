import React from 'react';

const Comment = ({comment}) => {
    const {userName, email, feedback, time, photo, date} = comment;
 	
	console.log(comment);
    return (
        <div className="container flex flex-col border shadow-xl w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={photo} alt="" className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{userName}</h4>
				<span className="text-xs dark:dark:text-gray-400">{email}</span>
			</div>
		</div>
		<div className="  dark:dark:text-yellow-500">
        <h1>{time}</h1>
        <h1>{date}</h1>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:dark:text-gray-400">
		<p>{feedback}</p>
	</div>
</div>
    );
};

export default Comment;
