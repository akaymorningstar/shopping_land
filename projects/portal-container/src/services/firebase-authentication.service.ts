import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService {

  constructor(private auth: Auth, private router: Router) { }

  login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider).then((result) => {
      this.router.navigate(['/']);
    }).catch((error) => {
      console.error('Authentication failed:', error);
    });
  }

  logout() {
    this.auth.signOut().then(() => this.router.navigate(['/']));
  }
}
