import { firestore } from '@/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Messages() {
    // getMessages();
    return <div className="bg-red-500">Messages</div>;
}

// async function getMessages() {
//     try {
//         const snapshot = await getDocs(collection(firestore(), 'Messages'));
//         snapshot.docs.forEach((doc) => {
//             console.log(doc.data());
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
