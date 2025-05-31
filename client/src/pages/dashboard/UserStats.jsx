import { useEffect, useState } from 'react';
import historyService from '../../service/historyService'; // Adjust path if needed

export default function UserStats() {
	const [userStats, setUserStats] = useState([]);

	useEffect(() => {
		// Get all history entries
		const allHistory = historyService.getAllHistory();

		// Aggregate stats per user and collect all login timestamps
		const statsMap = {};
		allHistory.forEach(({ email, timestamp }) => {
			if (!statsMap[email]) {
				statsMap[email] = { email, actions: 0, logins: [] };
			}
			statsMap[email].actions += 1;

			// Store each login timestamp
			statsMap[email].logins.push(timestamp);
		});

		setUserStats(Object.values(statsMap));
	}, []);

	// Format date and time in a readable format
	const formatDate = (timestamp) => {
		const date = new Date(timestamp);
		return date.toLocaleString(); // Format as 'MM/DD/YYYY, HH:MM:SS AM/PM'
	};

	return (
		<div className="max-w-6xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-2xl text-2xl">
			{/* Title */}
			<h2 className="text-5xl font-extrabold text-gray-800 text-center mb-10">
				User Login Statistics
			</h2>

			{/* Table Container */}
			<div >
				<table className="min-w-full table-auto rounded-lg bg-white overflow-hidden shadow-md text-2xl">
					<thead className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-2xl">
						<tr>
							<th className="px-6 py-4 text-left text-base font-medium tracking-wider">Email</th>
							<th className="px-6 py-4 text-left text-base font-medium tracking-wider">
								Logins
							</th>
							<th className="px-6 py-4 text-left text-base font-medium tracking-wider">
								Login Timestamps
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200 text-2xl">
						{userStats.length === 0 ? (
							<tr>
								<td colSpan={3} className="px-6 py-6 text-center text-gray-500">
									No user stats available.
								</td>
							</tr>
						) : (
							userStats.map((user) => (
								<tr
									key={user.email}
								>
									<td className="px-6 py-4 text-base text-gray-800">{user.email}</td>
									<td className="px-6 py-4 text-base text-indigo-600 font-semibold">
										{user.actions}
									</td>
									{/* Display all login timestamps */}
									<td className="px-6 py-4 text-base text-gray-600">
										{/* Check if user has logins */}
										{user.logins.length === 0 ? (
											<p>No logins recorded.</p>
										) : (
											<div className="max-h-48 overflow-y-auto pr-2">
												<ul>
													{user.logins.map((login, index) => (
														<li key={index}>{formatDate(login)}</li>
													))}
												</ul>
											</div>
										)}
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
