import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAytDlrzjwrS0BVPmvhwxAGVBu___EKWSc",
  authDomain: "my-blog-80c6f.firebaseapp.com",
  projectId: "my-blog-80c6f",
  storageBucket: "my-blog-80c6f.appspot.com",
  messagingSenderId: "630338293070",
  appId: "1:630338293070:web:58d0fad2112f2afbc7a21f",
  measurementId: "G-K9E9NPT38B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
