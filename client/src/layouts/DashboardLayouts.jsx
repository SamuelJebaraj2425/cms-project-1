import { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import AuthContext from '../context/AuthContext';

const PATHS = [
	{ path: '/dashboard/intro', text: '🚩 intro' },
    { path: '/dashboard/user-stats', text: '🧑‍🏫 stats' },
	{ path: '/dashboard/add', text: '🆕 Add new ' },
	{ path: '/dashboard/display', text: '📃 All content ' },
	{ path: '/dashboard/favorites', text: '⭐ My Favorites ' },
	{ path: '/dashboard/my-content', text: '😍 My Items ' },
];

export default function DashboardLayouts() {
	const location = useLocation();
	const { logout } = useContext(AuthContext);

	return (
		<div className="flex min-h-screen bg-gray-400 text-gray-600">
			<aside className="p-8 w-60 sticky top-0 h-screen flex flex-col items-center shadow-xl" style={{ background: 'linear-gradient(135deg,rgb(75, 33, 154) 0%,rgb(36, 20, 73) 50%,rgb(20, 10, 46) 100%)' }}>
				<span className="text-3xl font-extrabold mb-8 text-white tracking-wide">
					Dashboard
				</span>
				<div className="bg-violet-700 rounded-full p-3 mb-2 shadow-lg">
					<Link to="/dashboard/profile">
							<svg
								className={`w-8 h-8 ${location.pathname === "/dashboard/profile" ? "text-yellow-300 scale-110" : "text-white"} transition-all duration-200`}
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
								/>
							</svg>
					</Link>
					
				</div>
				<div className={`text-lg font-semibold mt-2 ${location.pathname === "/dashboard/profile" ? "text-yellow-300" : "text-white"}`}>
						Profile
				</div>
				<div className="text-gray-300 text-sm mb-6">
					________________________________
				</div>
				<div className="mb-1"></div>
				<nav className="</div>flex flex-col gap-0.5 w-full">
					{PATHS.map((value, index) => (
						<Link
							key={index}
							to={value.path}
							style={location.pathname === value.path ? STYLE.active : STYLE.inactive}
							className={`block px-4 py-2 rounded-lg font-medium transition 
								${
									location.pathname === value.path
										? 'bg-violet-600 shadow text-white'
										: 'hover:bg-gray-700 hover:text-white text-gray-300'
								}`}
						>
							{value.text.charAt(0).toUpperCase() + value.text.slice(1)}
						</Link>
					))}
				</nav>
				<button
					onClick={logout}
					className="mt-auto w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow transition flex items-center justify-center gap-2"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
					</svg>
					Logout
				</button>
			</aside>
			<main className="flex-1 min-h-screen overflow-auto p-10">
				<Outlet />
			</main>
		</div>
	);
}

const STYLE = {
	active: {
		color: 'white',
	},
	inactive: {
		color: 'gray',
	},
};