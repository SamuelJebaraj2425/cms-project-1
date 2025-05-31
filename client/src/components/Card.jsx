import { useContext, useState } from 'react';
import StorageContext from '../context/StorageContext';

export default function Card({ item, index }) {
	const [isFavorite, setIsFavorite] = useState(item?.isFavorite);
	const { deleteItem, updateItem } = useContext(StorageContext);

	function handleDelete() {
		deleteItem(index);
	}

	function handleFavorite() {
		updateItem(index, { isFavorite: !isFavorite });
		setIsFavorite(!isFavorite);
	}

	return (
		<div
			className="relative bg-white rounded-[1.5rem] shadow-2xl p-0 flex flex-col items-center max-w-xs w-full border-2 border-gray-300 overflow-hidden playcard"
			style={{
				aspectRatio: '2.5/3.5',
				minHeight: 320,
				minWidth: 220,
				boxShadow: '0 8px 24px 0 rgba(0,0,0,0.10)',
				position: 'relative',
			}}
		>
			{/* Top left corner */}
			<div className="absolute top-2 left-3 flex flex-col items-start text-xs font-bold text-gray-700">
				<span>{item?.isPrivate ? `🔒 owned by ${item?.ownedBy}` : '🆓'}</span>
				<span className="mt-1">{item.price ? `₹${item.price}` : ''}</span>
			</div>
			{/* Top right: Favorite */}
			<div className="absolute top-2 right-3">
				{isFavorite && <span className="text-yellow-400 text-2xl drop-shadow">⭐</span>}
			</div>
			{/* Center image */}
			{/* Name at the top */}
			<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-full px-4 text-center pointer-events-none z-10">
				<h2 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h2>
			</div>
			{/* Description below image */}
						<div className="w-full px-4 text-center mt-1 flex-1 flex items-center justify-center">
							<p className="text-gray-500 text-xs mb-2 w-full bg-gray-100 rounded-lg border border-gray-200 px-3 py-2 shadow-sm">{item.desc}</p>
						</div>
				
			
			{/* Bottom actions */}
			<div className="flex gap-2 w-full justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<button
					className="flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 rounded-lg hover:bg-red-200 transition font-medium text-xs"
					onClick={handleDelete}
				>
					🗑️ Delete
				</button>
				<button
					className={`flex items-center gap-1 px-3 py-1 rounded-lg transition font-medium text-xs ${
						isFavorite
							? 'bg-yellow-200 text-yellow-900 border border-yellow-400'
							: 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
					}`}
					onClick={handleFavorite}
				>
					{isFavorite ? '⭐ Favorited' : '☆ Favorite'}
				</button>
			</div>
			{/* Bottom right: suit-like icon */}
			<div className="absolute bottom-2 right-3 text-xs text-gray-400 rotate-180">
				{item.category === 'Games' ? '♠' : item.category === 'Toys' ? '♥' : '♦'}
			</div>
			{/* Bottom left: index */}
			<div className="absolute bottom-2 left-3 text-xs text-gray-400">#{index + 1}</div>
		</div>
	);
}
