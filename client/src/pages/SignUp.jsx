import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { register } = useContext(AuthContext);

	function handleSubmit(event) {
		event.preventDefault();
		register(email, password);
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 via-purple-950 to-gray-900">
			<form
				onSubmit={handleSubmit}
				className="bg-gray-900/95 p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-800"
			>

				<h2 className="text-3xl font-extrabold mb-8 text-center text-purple-300 tracking-tight">
					Create Your Account
				</h2>
				<div className="mb-6">
					<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
						Email Address
					</label>
					<input
						id="email"
						type="email"
						name="username"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-gray-100 placeholder-gray-400"
						placeholder="you@example.com"
					/>
				</div>
				<div className="mb-8">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-300 mb-2"
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
						className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-gray-100 placeholder-gray-400"
						placeholder="••••••••"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white py-3 rounded-lg hover:from-purple-800 hover:to-blue-800 transition-all font-bold shadow-lg"
				>
					Create New Account
				</button>
				<div className="mt-6 text-center text-sm text-gray-400">
					Already have an account?{' '}
					<a href="/login" className="text-purple-400 hover:underline">
						Sign in
					</a>
				</div>
			</form>
		</div>
	);
}