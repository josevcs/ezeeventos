import { firestore } from '@/firebase/firebase';
import {
    query,
    collection,
    getDocs,
    orderBy,
    DocumentData,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Standings() {
    const [standings, setStandings] = useState(Array<DocumentData>);
    useEffect(() => {
        const getStandings = async () => {
            try {
                const q = query(
                    collection(firestore(), 'Taça_guapore', '2025', 'Teams'),
                    orderBy('points', 'desc'),
                    orderBy('wins', 'desc'),
                    orderBy('goals_diff', 'desc'),
                    orderBy('goals', 'desc'),
                    orderBy('own_goals')
                );
                const snapshot = await getDocs(q);
                const array = Array<DocumentData>();
                snapshot.forEach((element) => {
                    array.push(element.data);
                });
                setStandings(array);
            } catch (error) {
                console.log(error);
            }
        };
        getStandings();
    }, []);

    return <div className="bg-red-500">Standings</div>;
}
