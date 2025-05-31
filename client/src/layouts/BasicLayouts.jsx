import { Link, Outlet } from 'react-router';
import { FcNook } from 'react-icons/fc';
import { FaAddressBook } from "react-icons/fa6";

function BasicLayouts() {
	return (
		<>
			<header className="fixed w-screen z-20 bg-gray-900/70 backdrop-blur-2xl text-white py-4 shadow-lg flex flex-col sm:flex-row items-center justify-between px-6">
				<div className="text-2xl font-semibold flex items-center gap-2">
					<span role="img" aria-label="notes">
						<Link to={'/home'}>
							<FaAddressBook size={30} color="#8b5cf6" />
						</Link>
					</span>{' '}
					Diary
				</div>
				<div className="mt-3 sm:mt-0 flex gap-3">
					<div className="bg-gray-900/70 border-2 border-violet-700 text-white px-4 py-1 rounded-lg  cursor-pointer backdrop-blur-2xl">
						<Link to={'/login'}>Sign-in</Link>
					</div>
					<div className="bg-gray-900/70 border-2 border-blue-400 text-white px-4 py-1 rounded-lg  cursor-pointer backdrop-blur-2xl">
						<Link to={'/sign-up'}>Sign-up</Link>
					</div>
				</div>
			</header>
			<main className="h-screen bg-gray-800/70 backdrop-blur-2xl">
				<Outlet />
			</main>
			<footer className="fixed z-30 w-screen bottom-0 bg-gray-900/70 backdrop-blur-2xl text-gray-400 py-4 text-center mt-8 border-t border-gray-700 shadow">
				© {new Date().getFullYear()} Diary App. All rights reserved.
			</footer>
		</>
	);
}

export default BasicLayouts;