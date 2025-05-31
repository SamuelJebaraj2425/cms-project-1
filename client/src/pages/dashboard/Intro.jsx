import React from 'react';

export default function Intro() {
	return (
		<div className="p-10 md:p-20 min-h-[89vh] bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-xl rounded-xl flex flex-col items-center justify-center"
		style={{ background: 'linear-gradient(135deg,rgb(75, 33, 154) 0%,rgb(36, 20, 73) 50%,rgb(20, 10, 46) 100%)' }}>
			<h1 className="text-4xl md:text-4xl font-extrabold mb-4 text-center drop-shadow bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent dark:from-blue-300 dark:via-purple-300 dark:to-pink-200">
				Welcome to the Dashboard App
			</h1>
			<p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6 text-center max-w-2xl">
				This app helps you organize your project notes, track your progress, and visualize
				important information all in one place.
			</p>
			<ul className="list-disc text-blue-700 dark:text-blue-200 space-y-2 pl-6 text-base md:text-lg max-w-xl self-start md:self-center">
				<li>
					<span className="font-semibold">Add, edit,</span> and manage your notes easily
				</li>
				<li>
					<span className="font-semibold">Track</span> your project progress
				</li>
				<li>
					<span className="font-semibold">Get insights</span> and visual summaries
				</li>
			</ul>
		</div>
	);
}