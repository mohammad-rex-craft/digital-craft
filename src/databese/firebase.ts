// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCoXuZawjruDsQrextja_xj1YtIEUFtc1M",
    authDomain: "digital-craft-48b3c.firebaseapp.com",
    projectId: "digital-craft-48b3c",
    storageBucket: "digital-craft-48b3c.appspot.com",
    messagingSenderId: "516727567054",
    appId: "1:516727567054:web:46ab9ccfb22da677dd569f",
    measurementId: "G-53ZNG0GGF6"
};

// ✅ تحقق من عدم إعادة التهيئة
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { app, database, auth, storage, provider };
