import { firestore } from '@/firebase/firebase';
import {
    query,
    collection,
    getDocs,
    orderBy,
    DocumentData,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Statistics() {
    const [statistics, setStatistics] = useState(Array<DocumentData>);
    useEffect(() => {
        const getStatistics = async () => {
            try {
                const q = query(
                    collection(firestore(), 'Taça_guapore', '2025', 'Players'),
                    orderBy('goals')
                );
                const snapshot = await getDocs(q);
                const array = Array<DocumentData>();
                snapshot.forEach((element) => {
                    array.push(element.data);
                });
                setStatistics(array);
            } catch (error) {
                console.log(error);
            }
        };
        getStatistics();
    }, []);
    return <div className="bg-red-500">Statistics</div>;
}
