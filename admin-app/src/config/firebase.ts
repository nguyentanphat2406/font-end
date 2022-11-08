import * as FirebaseAdmin from "firebase-admin";

const credentialAuth = require("./chat-app-76da7-firebase-adminsdk-oukap-f2c80052d4.json");

try {
  FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert(credentialAuth),
  });
  console.log("Firebase admin initialized");
} catch (err: any) {
  console.error("Firebase admin initialization error: ");
}

const firestoreAdmin = FirebaseAdmin.firestore();

export { FirebaseAdmin, firestoreAdmin };
