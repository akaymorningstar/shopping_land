import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { routes } from './app.routes';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFb9g28H3zHfmbwD5d2UAAkl4AdpIqzTA",
  authDomain: "shopping-land-application.firebaseapp.com",
  projectId: "shopping-land-application",
  storageBucket: "shopping-land-application.appspot.com",
  messagingSenderId: "885384244232",
  appId: "1:885384244232:web:dd639562f32ceae758f5bd"
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
