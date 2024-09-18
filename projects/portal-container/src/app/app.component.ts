import { Component } from '@angular/core';
interface userInfoInterface {
  user_name: string | null;
  user_img: string | null;
}
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { FirebaseAuthenticationService } from '../services/firebase-authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userInfo!:userInfoInterface; // "!" this sign is a type assertion, to tell TypeScript that the property will be initialized later
  title = 'portal-container';
  isLoggedIn: boolean = false;
  showDropdown = false;
  constructor(private router: Router,private auth: Auth,private authService: FirebaseAuthenticationService) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.userInfo = {
          user_name: user.displayName,
          user_img: user.photoURL
        }
        // User is signed in
        this.isLoggedIn = true;
        this.router.navigate(["/home"]);
        console.log("User logged in --> ",user);
      } else {
        // No user is signed in
        console.log("Need to login first...");
        this.authService.login();
      }
    });
  }
  
  navigation(tabPath:string){
    console.log("clicked tab : ", tabPath);
    this.router.navigate([tabPath]);
  }

  toggleProfileSection(){
    this.showDropdown = !this.showDropdown; 
  }

  logout(){
    this.authService.logout();
    this.isLoggedIn = false;
  }
  
}
