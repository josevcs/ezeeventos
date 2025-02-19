import { firestore } from '@/firebase/firebase';
import { collection, DocumentData, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function Teams() {
    const [teams, setTeams] = useState(Array<DocumentData>);
    useEffect(() => {
        const getTeams = async () => {
            try {
                const q = query(
                    collection(firestore(), 'Taça_guapore', '2025', 'Teams')
                );
                const snapshot = await getDocs(q);
                const array = Array<DocumentData>();
                snapshot.forEach((element) => {
                    array.push(element.data);
                });
                setTeams(array);
            } catch (error) {
                console.log(error);
            }
        };
        getTeams();
    }, []);
    return <div className="bg-red-500">TEAMS</div>;
}
