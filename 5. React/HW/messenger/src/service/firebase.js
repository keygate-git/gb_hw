
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAV3J9aq5Yy7BNAtbxtcTi1UTV4adGHkEw",
    authDomain: "gb-messenger-c6952.firebaseapp.com",
    projectId: "gb-messenger-c6952",
    storageBucket: "gb-messenger-c6952.appspot.com",
    databaseURL: "https://gb-messenger-c6952-default-rtdb.europe-west1.firebasedatabase.app",
    messagingSenderId: "127940790671",
    appId: "1:127940790671:web:451468288bf0a729a123fa"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
    await signOut(auth);
};

export const userRefName = (userId) => ref(db, `${userId}/name`);
export const userRefShow = (userId) => ref(db, `${userId}/showName`);
export const userRefChatlist = (userId) => ref(db, `${userId}/chatlist`);
export const userRefChatlistById = (userId, id) => ref(db, `${userId}/chatlist/${id}`);
export const userRefChatMessageById = (userId, id, num) => ref(db, `${userId}/chatlist/${id}/messageList/${num}`);