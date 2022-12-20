import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import App from './App';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="200432753656-81rh0mm3bfktumv1hp3tsffk18ia88mk.apps.googleusercontent.com"><App /></GoogleOAuthProvider>
  </React.StrictMode>
);
//id   200432753656-81rh0mm3bfktumv1hp3tsffk18ia88mk.apps.googleusercontent.com
//secret  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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
