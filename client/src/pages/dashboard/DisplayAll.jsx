import { useContext } from 'react';
import StorageContext from '../../context/StorageContext';
import Card from '../../components/Card';

export default function DisplayAll() {
	const { items } = useContext(StorageContext); // Access function from context

	return (
		<div className="flex flex-wrap gap-5 min-w-screen min-h-screen p-4 box-border w-screen">
			{items.map((value, index) => {
				return <Card key={index} item={value} index={index} />;
			})}
		</div>
	);
}