import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'product-details';

  // productId: number;
  // itemId: number;
  constructor(private route: ActivatedRoute) {}

  
  ngOnInit() {
    // this.itemId = +this.route.snapshot.paramMap.get('itemId');
    // Fetch item details based on itemId


    // this.route.paramMap.subscribe(params => {
    //   this.productId = +params.get('productId');
    //   // Fetch and display product details based on productId
    // });
  }
}
