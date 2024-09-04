// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
    production: false,
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebaseConfig : {
      apiKey: "AIzaSyDUkb1liyKlz4hxW2hlqWU6rlfQ3Zchw4Y",
      authDomain: "shopping-land-18582.firebaseapp.com",
      projectId: "shopping-land-18582",
      storageBucket: "shopping-land-18582.appspot.com",
      messagingSenderId: "883529627324",
      appId: "1:883529627324:web:4224dab9152dab9695c2b9",
      measurementId: "G-5P5ZQVP67Y"
    },
    baseUrl: "http://localhost:4800/api/"
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
