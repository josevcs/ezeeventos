import { firestore } from '@/firebase/firebase';
import {
    query,
    collection,
    getDocs,
    orderBy,
    DocumentData,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Brackets() {
    const [matches, setMatches] = useState(Array<DocumentData>);
    useEffect(() => {
        const getBrackets = async () => {
            try {
                const q = query(
                    collection(
                        firestore(),
                        'Taça_guapore',
                        '2025',
                        'Schedule',
                        'Quarterfinal',
                        'Matches'
                    ),
                    orderBy('start_date')
                );
                const snapshot = await getDocs(q);
                const array = Array<DocumentData>();
                snapshot.forEach((element) => {
                    array.push(element.data);
                });
                setMatches(array);
            } catch (error) {
                console.log(error);
            }
        };
        getBrackets();
    }, []);
    return <div className="bg-red-500">Brackets</div>;
}

async function getBrackets() {}
