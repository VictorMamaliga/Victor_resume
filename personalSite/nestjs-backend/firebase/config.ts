const admin = require('firebase-admin');
import serviceAccount from './key.json';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://personal-website-cd86a.appspot.com',
  });

export const db = admin.firestore();
export const bucket = admin.storage().bucket();
