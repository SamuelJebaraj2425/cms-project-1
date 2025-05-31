import { useState, useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../context/AuthContext';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useContext(AuthContext);

	function handleSubmit(event) {
		event.preventDefault();
		login(email, password);
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 via-purple-950 to-gray-900">
			<div className="bg-slate-900/95 p-10 rounded-2xl shadow-2xl w-full max-w-md border border-slate-800">
				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="flex flex-col items-center mb-6">
						<div className="bg-blue-700 rounded-full p-3 mb-2 shadow-lg">
							<svg
								className="w-8 h-8 text-white"
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
						</div>
						<h2 className="text-3xl font-extrabold text-blue-300">Sign In</h2>
						<p className="text-gray-400 mt-1 text-sm">
							Welcome back! Please login to your account.
						</p>
					</div>
					<div>
						<label htmlFor="email" className="block text-gray-300 font-semibold mb-1">
							Email
						</label>
						<input
							id="email"
							type="email"
							name="username"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full px-4 py-2 border border-slate-700 bg-slate-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
							placeholder="Enter your email"
							autoComplete="username"
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-gray-300 font-semibold mb-1"
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className="w-full px-4 py-2 border border-slate-700 bg-slate-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
							placeholder="Enter your password"
							autoComplete="current-password"
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-gradient-to-r from-violet-500 via-violet-600 to-blue-700 text-white py-2.5 rounded-lg hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 transition-colors font-bold shadow-md"
					>
						Login
					</button>
					<div className="text-center text-sm text-gray-400 mt-4">
						Don't have an account?{' '}
						<Link to="/sign-up" className="text-blue-400 hover:underline">
							Sign up
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}