import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTmLh1x0yLDalJT4WRyi9th-cDtpN1y6c",
    authDomain: "hayat-e-shoppers.firebaseapp.com",
    projectId: "hayat-e-shoppers",
    storageBucket: "hayat-e-shoppers.firebasestorage.app",
    messagingSenderId: "824685573758",
    appId: "1:824685573758:web:743101ae421d40d9ea4a2f",
    measurementId: "G-JFCS7FGYQH"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export{ auth};
