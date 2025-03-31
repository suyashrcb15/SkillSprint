// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD45Ku4WoMVFrpkDjl-c2Vrv3fS-0wvLV8",
    authDomain: "skillsprint-d5d03.firebaseapp.com",
    projectId: "skillsprint-d5d03",
    storageBucket: "skillsprint-d5d03.firebasestorage.app",
    messagingSenderId: "31936401450",
    appId: "1:31936401450:web:750851ba37f517d816b353",
    measurementId: "G-W5G4JDC1G5"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig): getApp();

export const auth=getAuth(app);
export const db=getFirestore(app);