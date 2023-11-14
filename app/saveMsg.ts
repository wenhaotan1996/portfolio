'use server';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

type Message = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
async function saveMessage({ name, email, message, subject }: Message) {
  try {
    const docRef = await addDoc(collection(db, 'message'), {
      name,
      email,
      message,
      subject,
    });
    console.log('Message saved with ID: ', docRef.id);
  } catch (e) {
    console.error('Error saving message: ', e);
  }
}

export default saveMessage;
