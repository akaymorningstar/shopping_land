import { Component } from '@angular/core';
import { RouterOutlet, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portal-container';
  constructor(private router: Router) {}
  
  navigation(tabPath:string){
    console.log("clicked tab : ", tabPath);
    this.router.navigate([tabPath]);
  }
}
