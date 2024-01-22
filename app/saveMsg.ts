'use server';
import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';

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

async function sendEmail({ name, email, message, subject }: Message) {
  fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SENDGRID_APIKEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: process.env.CONTACT_RECEIPT_EMAIL,
            },
          ],
          dynamic_template_data: {
            name,
            email,
            message,
            subject,
          },
        },
      ],
      template_id: process.env.SENDGRID_TEMPLATE_ID,
      from: {
        email: process.env.CONTACT_RECEIPT_EMAIL,
      },
    }),
  });
}

async function saveMessage({ name, email, message, subject }: Message) {
  try {
    const docRef = await addDoc(collection(db, 'message'), {
      name,
      email,
      message,
      subject,
      timestamp: serverTimestamp(),
    });
    await sendEmail({ name, email, message, subject });
  } catch (e) {
    console.error('Error saving message: ', e);
  }
}

export default saveMessage;
