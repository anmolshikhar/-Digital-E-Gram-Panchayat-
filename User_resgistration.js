// geting all the elements of the html
let Name = document.getElementById("name").value;
let Email = document.getElementById("email").value;
let Password = document.getElementById("password").value;
let ConfirmPassword = document.getElementById("confirm-password").value;
let Phone = document.getElementById("number").value;
let age = document.getElementById("age").value;
let submit = document.getElementById("submit");
let userId = Name + Math.floor(Math.random() * 1000000);
//Adding firebase 
import {initializeApp}from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import {getAuth ,signInWithPhoneNumber,RecaptchaVerifier} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBtSJGhmxE66vDT4fWME9-RkmdmQ20RzHI",
  authDomain: "digital-e-gram-panchayat-4f5f1.firebaseapp.com",
  projectId: "digital-e-gram-panchayat-4f5f1",
  storageBucket: "digital-e-gram-panchayat-4f5f1.firebasestorage.app",
  messagingSenderId: "495366218574",
  appId: "1:495366218574:web:aa3089d548c94051a4741f",
  measurementId: "G-G6M4W9JRYC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);